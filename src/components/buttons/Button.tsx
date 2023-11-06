export enum ButtonType {
  Submit = 'submit',
  Button = 'button',
  Reset = 'reset',
}

const Button = ({ title, type }: { title: string; type: ButtonType }) => {
  return (
    <button className='bg-black px-4 py-2 text-white hover:text-[#c1c1c1]' type={type}>
      {title}
    </button>
  );
};

export default Button;
