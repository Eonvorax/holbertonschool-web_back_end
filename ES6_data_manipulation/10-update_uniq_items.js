export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Using a for loop here since it looks cleaner than using map
  for (const [item, quantity] of map) {
    if (quantity === 1) {
      map.set(item, 100);
    }
  }
}
