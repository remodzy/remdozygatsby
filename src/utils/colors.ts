export type ColorType = {
  main: string
  sub?: string
}

export const mainColorsGroup: { [key: string]: ColorType } = {
  primary: {
    main: '#4865EB',
    sub: '#507CF5',
  },
  success: {
    main: '#5B9976',
    sub: '#EAF2EE',
  },
  warning: {
    main: '#D78153',
    sub: '#E3975D',
  },
  text: {
    main: '#22344B',
    sub: '#5C6E80',
  },
  background: {
    main: '#F8FAFC',
  },
}

export const subColorsGroup: { [key: string]: ColorType } = {
  first: {
    main: '#21A4D9',
    sub: '#4BC2F2',
  },
  second: {
    main: '#B98EE0',
    sub: '#CB9EF3',
  },
  third: {
    main: '#FC7266',
    sub: '#FE958C',
  },
  fourth: {
    main: '#FFB675',
    sub: '#FFF0E3',
  },
  fifth: {
    main: '#486CE3',
    sub: '#DBE2FA',
  },
  sixth: {
    main: '#F7C357',
    sub: '#F8D58D',
  },
  seventh: {
    main: '#FE9682',
    sub: '#FFEAE6',
  },
  eighth: {
    main: '#D3DE5A',
    sub: '#E1EB7A',
  },
}

export type ColorName = {
  group: string
  color: string
}

export function getColor(name: ColorName): ColorType {
  if (name.group === 'main') {
    return mainColorsGroup[name.color]
  }

  return subColorsGroup[name.color]
}

export function getTextColor(): ColorType {
  return mainColorsGroup.text
}
