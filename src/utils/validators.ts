export const emailValidator = (email: string): boolean => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(email.toLowerCase());
};

export const phoneValidator = (phone: string): boolean => {
  const phoneRegex = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  const phoneDigits = phone.replace(/\D/g, "");
  return phoneRegex.test(phoneDigits);
};
