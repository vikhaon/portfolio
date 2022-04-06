export default function validateForm({ name, email, subject, message }) {
  if (!name.trim()) {
    return 'You must enter a valid Name!';
  } else if (name.length < 3) {
    return 'Name must be at least 3 characters or more.';
  }

  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email) {
    return 'Email required!';
  } else if (!regex.test(email.toLocaleLowerCase())) {
    return 'Email address is invalid!';
  }

  if (!subject) {
    return 'Subject is required!';
  } else if (subject.length < 3) {
    return 'Subject needs to be at least 3 characters or more.';
  }

  if (!message) {
    return 'Message is required!';
  }
  return null;
}
