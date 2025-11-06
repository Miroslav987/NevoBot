
export function PermissionsArr(permissions:object):string[] {
  const result = Object.entries(permissions)
    .filter(([_, value]) => value)
    .map(([key]) => key)
  return result
}


