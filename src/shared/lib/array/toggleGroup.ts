export const toggleGroup = (current: number[], group: number[]) => {
  const selected = group.every((value) => current.includes(value));
  if (selected) {
    return current.filter((value) => !group.includes(value));
  }
  return [...new Set([...current, ...group])];
};
