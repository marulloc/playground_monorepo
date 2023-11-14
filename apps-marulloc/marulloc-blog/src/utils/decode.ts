export const decodeUnicode = (string: string) => {
  return decodeURIComponent(
    atob(string)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join(""),
  );
};
