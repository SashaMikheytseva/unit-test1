export default function healthBar(object) {
  if (object.health > 50) {
    return 'healthy';
  } if (object.health >= 15 && object.health <= 50) {
    return 'wounded';
  }
  return 'critical';
}
