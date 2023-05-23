
interface map {
  [key: string]: string
}

const FIREBASE_ERRORS : map = {
  'auth/email-already-in-use': 'E-mail já cadastrado.',
  'fallback': 'Houve um problema, contate o suporte.'
}

export default FIREBASE_ERRORS;