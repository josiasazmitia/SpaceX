export function setParams(obj) {
  const out = {};
  for (const k in obj) {
    const v = obj[k];
    if (v === undefined || v === null) continue;
    out[k] = String(v);
  }
  return out;
}
