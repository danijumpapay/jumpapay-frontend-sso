type AuthLoginWithUserForm = {
  user: string;
  password: string;
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