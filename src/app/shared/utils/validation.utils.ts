export class ValidationUtils {
  static isEmailValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static isPhoneValid(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
  }

  static isRequired(value: any): boolean {
    return value !== null && value !== undefined && value !== '';
  }

  static minLength(value: string, min: number): boolean {
    return !!(value && value.length >= min);
  }

  static maxLength(value: string, max: number): boolean {
    return !value || value.length <= max;
  }
}