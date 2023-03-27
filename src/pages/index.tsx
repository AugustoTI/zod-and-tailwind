/* eslint-disable jsx-a11y/anchor-is-valid */
import { type NextPage } from 'next'
import Image from 'next/image'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MdOutlineEmail, MdPassword } from 'react-icons/md'
import clsx from 'clsx'
import { loginFormSchema, type LoginFields } from '~/validations/loginForm'
import reactLogo from '~/assets/react-logo.svg'

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>({
    resolver: zodResolver(loginFormSchema),
  })

  const onSubmit: SubmitHandler<LoginFields> = data => {
    console.log(data)
  }

  return (
    <main className="grid min-h-screen grid-cols-[minmax(250px,_400px)] items-center justify-center">
      <div className="px-6 xs:px-4">
        <header className="mb-12 grid justify-items-center gap-y-4">
          <Image src={reactLogo} alt="Logo do ReactJS" priority className="w-[120px]" />
          <div className="grid gap-y-[0.875rem] text-center">
            <h1 className="text-[2rem] font-bold text-gray-100">Ignite Lab</h1>
            <p className="text-sm">Faça login e comece a usar !</p>
          </div>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-semibold text-gray-100"
            >
              Endereço de e-mail
            </label>
            <div className="relative mb-2">
              <MdOutlineEmail className="absolute inset-y-0 left-6 my-auto text-[1.5rem] text-gray-400" />
              <input
                id="email"
                type="email"
                className={clsx(
                  'block w-full rounded border-2 border-solid border-transparent bg-gray-800 py-3 pl-[3.75rem] pr-6 text-gray-100 outline-none transition-colors placeholder:text-gray-400 focus:border-cyan-300',
                  !!errors.email && 'focus:border-red-500',
                )}
                placeholder="JonDoe@example.com"
                {...register('email')}
              />
            </div>
            {!!errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-3 block text-sm font-semibold text-gray-100"
            >
              Senha
            </label>
            <div className="relative">
              <MdPassword className="absolute inset-y-0 left-6 my-auto text-[1.5rem] text-gray-400" />
              <input
                id="password"
                type="password"
                className={clsx(
                  'block w-full rounded border-2 border-solid border-transparent bg-gray-800 py-3 pl-[3.75rem] pr-6 text-gray-100 outline-none transition-colors placeholder:text-gray-400 focus:border-cyan-300',
                  !!errors.password && 'focus:border-red-500',
                )}
                placeholder="*********"
                {...register('password')}
              />
            </div>
            {!!errors.password && <p>{errors.password.message}</p>}
          </div>

          <div className="mb-8 flex gap-2">
            <input
              type="checkbox"
              name="remember-user"
              id="remember-user"
              className="flex h-6 w-6 appearance-none items-center justify-center rounded border-2 border-solid border-transparent bg-gray-800 p-[2px] outline-none transition-colors checked:after:font-semibold checked:after:text-cyan-300 checked:after:content-['✓'] focus:border-cyan-300"
            />
            <label htmlFor="remember-user" className="text-base text-gray-200">
              Lembrar de mim por 30 dias
            </label>
          </div>

          <button className="block w-full rounded bg-cyan-500 py-4 px-8 text-base font-semibold text-black outline-none transition-colors duration-300 hover:bg-cyan-300 focus:bg-cyan-300">
            Entrar na plataforma
          </button>
        </form>
        <footer className="mb-8 grid gap-y-4 text-center text-sm underline">
          <a href="#" className="hover:text-gray-200">
            Esqueceu sua senha ?
          </a>
          <a href="#" className="hover:text-gray-200">
            Não possui conta ? Crie uma agora !
          </a>
        </footer>
      </div>
    </main>
  )
}

export default Home
