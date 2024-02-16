import { Button } from 'react-bootstrap'

const PasswordUpdatedComponent = () => {
  return (
    <div className="py-12 px-12 bg-white shadow-lg text-center">
    <h3 className="mt-6 mb-8">Şifre Sıfırlama</h3>
    <input
      className="form-control mt-6"
      type="email"
      placeholder="Şifre sıfırlama linki için e-posta adresinizi giriniz"
      defaultValue=""
    />
    <Button className="btn btn-primary w-100 mt-6">Gönder</Button>
  </div>
  )
}

export default PasswordUpdatedComponent
