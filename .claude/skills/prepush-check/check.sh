#!/usr/bin/env bash
# Pre-push checks for the AI-native-research inquiry repo and its starter template.
# These repos have no CI; this is the equivalent gate. Mechanical checks only —
# the maintainer's review is the substantive gate.
#
# Usage:  bash check.sh ["<inquiry repo>" "<starter repo>"]
# Exit:   0 = all pass, 1 = something failed.

INQUIRY="${1:-/c/Code/AI native research}"
STARTER="${2:-/c/Code/ai-native-research-starter}"
FAIL=0
pass(){ echo "PASS — $1"; }
fail(){ echo "FAIL — $1"; FAIL=1; }

echo "########## working trees ##########"
for r in "$INQUIRY" "$STARTER"; do
  if [ -n "$(git -C "$r" status --porcelain)" ]; then
    fail "uncommitted changes in $r (commit before push — the push won't carry them)"
  else pass "working tree clean: $r"; fi
done

echo "########## link / citation integrity (changed files vs origin/main) ##########"
check_links(){
  local r="$1" broken=0 f dir tgt path resolved
  for f in $(git -C "$r" diff --name-only origin/main..HEAD -- '*.md' 2>/dev/null); do
    [ -f "$r/$f" ] || continue
    dir=$(dirname "$r/$f")
    while IFS= read -r tgt; do
      case "$tgt" in
        http*|mailto:*|\#*) continue;;
        *'<'*|*'>'*|*'`'*|*'*'*|*' '*) continue;;
      esac
      path="${tgt%%#*}"; [ -z "$path" ] && continue
      if [ "${path:0:1}" = "/" ]; then resolved="$r/$path"; else resolved="$dir/$path"; fi
      [ -e "$resolved" ] || { echo "    broken: $f -> $tgt"; broken=1; }
    done < <(grep -oE '\]\([^)]+\)' "$r/$f" 2>/dev/null | sed -E 's/^\]\(//; s/\)$//')
  done
  return $broken
}
for r in "$INQUIRY" "$STARTER"; do
  if check_links "$r"; then pass "links resolve in changed files: $r"; else fail "broken relative link(s) in $r"; fi
done

echo "########## update-document headers ##########"
for d in "$INQUIRY"/updates/[0-9]*.md; do
  [ -f "$d" ] || continue
  miss=""; for k in applies_from cut_at starter_version; do grep -q "$k:" "$d" || miss="$miss $k"; done
  [ -z "$miss" ] && pass "header complete: $(basename "$d")" || fail "$(basename "$d") missing:$miss"
done

echo "########## release invariants ##########"
PIN=$(grep -oE '[0-9a-f]{40}' "$STARTER/CLAUDE.md" | head -1)
if [ -n "$PIN" ] && git -C "$INQUIRY" cat-file -t "$PIN" >/dev/null 2>&1; then
  pass "template pin ${PIN:0:7} resolves in inquiry"
else fail "template pin (${PIN:0:7}) missing/unresolved in inquiry — push inquiry first"; fi

LATEST=$(ls "$INQUIRY"/updates/[0-9]*.md 2>/dev/null | sort | tail -1)
SV_DOC=$(grep -oE 'starter_version:[[:space:]]*[0-9.]+' "$LATEST" 2>/dev/null | grep -oE '[0-9.]+$')
SV_TPL=$(grep -oE 'starter_version:[[:space:]]*[0-9.]+' "$STARTER/CLAUDE.md" | grep -oE '[0-9.]+$')
[ -n "$SV_DOC" ] && [ "$SV_DOC" = "$SV_TPL" ] && pass "starter_version coherent ($SV_TPL == $(basename "$LATEST"))" \
  || fail "starter_version mismatch: template '$SV_TPL' vs latest doc '$SV_DOC'"

# Only the release being pushed: each new/changed update doc's attachments must
# match the installed skill. Historical attachments are immutable snapshots that
# later inline edits legitimately drift the current skill away from.
shopt -s nullglob
changed_docs=$(git -C "$INQUIRY" diff --name-only origin/main..HEAD -- 'updates/[0-9]*.md' 2>/dev/null)
if [ -z "$changed_docs" ]; then
  echo "  (no new/changed update docs vs origin/main — attachment fidelity n/a)"
else
  for d in $changed_docs; do
    num=$(basename "$d" | grep -oE '^[0-9]+')
    for att in "$INQUIRY"/updates/${num}-files/*-SKILL.md; do
      [ -f "$att" ] || continue
      base=$(basename "$att"); skill="${base%-SKILL.md}"; inst="$STARTER/.claude/skills/$skill/SKILL.md"
      if [ -f "$inst" ] && diff -q --strip-trailing-cr "$att" "$inst" >/dev/null 2>&1; then
        pass "attachment fidelity: $skill (from $(basename "$d"))"
      else fail "attachment $base (from $(basename "$d")) != installed skill"; fi
    done
  done
fi
shopt -u nullglob

echo "########## METHODOLOGY §8 mapped skills exist ##########"
for s in $(grep -oE 'skill `[a-z-]+`' "$INQUIRY/METHODOLOGY.md" 2>/dev/null | grep -oE '`[a-z-]+`' | tr -d '`' | sort -u); do
  [ -f "$STARTER/.claude/skills/$s/SKILL.md" ] && pass "mapped skill present: $s" \
    || fail "METHODOLOGY §8 maps skill '$s' but starter lacks it"
done

echo "########## skill frontmatter (changed SKILL.md) ##########"
for r in "$INQUIRY" "$STARTER"; do
  for f in $(git -C "$r" diff --name-only origin/main..HEAD -- .claude/skills 2>/dev/null); do
    case "$f" in */SKILL.md) ;; *) continue;; esac
    [ -f "$r/$f" ] || continue
    if head -1 "$r/$f" | grep -q '^---' && grep -q '^name:' "$r/$f" && grep -q '^description:' "$r/$f"; then
      pass "frontmatter ok: $f"
    else fail "frontmatter incomplete: $r/$f"; fi
  done
done

echo ""
if [ "$FAIL" = 0 ]; then echo ">>> ALL PREPUSH CHECKS PASS"; exit 0; else echo ">>> PREPUSH CHECKS FAILED"; exit 1; fi
