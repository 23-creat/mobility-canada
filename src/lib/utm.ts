const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;

export function captureUtms() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);

  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) sessionStorage.setItem(key, value);
  });
}

export function getUtms(): Record<(typeof UTM_KEYS)[number], string> {
  if (typeof window === "undefined") {
    return {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_content: "",
    };
  }

  return Object.fromEntries(
    UTM_KEYS.map((key) => [key, sessionStorage.getItem(key) ?? ""])
  ) as Record<(typeof UTM_KEYS)[number], string>;
}
