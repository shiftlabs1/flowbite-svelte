import type { Colors } from '$lib/types';

export const replaceBlue = (color: Colors | string, classString: string) => {
      const searchMask = '-blue-'
      const regEx = new RegExp(searchMask, 'ig')
      const replaceMask = `-${color.toString()}-`
      return classString.replaceAll(regEx, replaceMask)
}