type AuthLoginWithUserForm = {
  user: string;
  password: string;
  client_id: string;
  return_to: string;
};

type AuthLoginWithWhatsappForm = {
  phone?: string;
  otp?: string;
};

type SignupWithUser = {
  name: string;
  email: string;
  password: string;
}