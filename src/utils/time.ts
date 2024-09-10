export const ONE_SECOND_MS = 1_000;
export const ONE_MINUTE_MS = 60 * ONE_SECOND_MS;
export const ONE_HOUR_MS = 60 * ONE_MINUTE_MS;
export const ONE_DAY_MS = 24 * ONE_HOUR_MS;

const getRenderTimeDurationParts = (durationMs: number): [number, string] => {
  if (durationMs < ONE_MINUTE_MS) {
    return [durationMs / ONE_SECOND_MS, 's'];
  }

  if (durationMs < ONE_HOUR_MS) {
    return [durationMs / ONE_MINUTE_MS, 'm'];
  }

  return [durationMs / ONE_HOUR_MS, 'h'];
};

export const renderTimeDuration = (durationMs: number) => {
  const [durationInUnits, units] = getRenderTimeDurationParts(durationMs);

  return [Number.isInteger(durationInUnits) ? durationInUnits : durationInUnits.toFixed(1), units].join('');
};