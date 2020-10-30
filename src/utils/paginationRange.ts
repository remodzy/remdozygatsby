export type PageRangeItem = string | number | never

export function paginationRange(
  current: number,
  length: number,
  delta = 2
): PageRangeItem[] {
  const range = {
    start: Math.round(current - delta / 2),
    end: Math.round(current + delta / 2),
  }

  if (range.start - 1 === 1 || range.end + 1 === length) {
    range.start += 1
    range.end += 1
  }

  let pages: PageRangeItem[] =
    current > delta
      ? getRange(
          Math.min(range.start, length - delta),
          Math.min(range.end, length)
        )
      : getRange(1, Math.min(length, delta + 1))

  const withDots = (value: number, pair: PageRangeItem[]) =>
    pages.length + 1 !== length ? pair : [value]

  if (pages[0] !== 1) {
    pages = withDots(1, [1, '...']).concat(pages)
  }

  if (pages[pages.length - 1] < length) {
    pages = pages.concat(withDots(length, ['...', length]))
  }

  return pages
}

function getRange(start: number, end: number) {
  return Array(end - start + 1)
    .fill(0)
    .map((v, i) => i + start)
}
