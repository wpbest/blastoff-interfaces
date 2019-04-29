/**
 * 1. Refactor the `user` argument to the login function to be a User interface.
 * 2. Fix the issue in the verifyPhone function.
 */

function login(user: { username: string, password: string }): boolean {
  return (user.password === 'password');
}

function verifyPhone(person: object): boolean {
  return /[0-9]{3}-[0-9]{3}-[0-9]{3}/.test(person.phone);
}