export default function Footer() {
  const navButtons: IconButtonProps[] = [
    {
      name: "Home",
      isActive: true,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 8.33335C2.49994 8.0909 2.55278 7.85137 2.65482 7.63144C2.75687 7.41152 2.90566 7.21651 3.09083 7.06001L8.92417 2.06085C9.22499 1.8066 9.60613 1.66711 10 1.66711C10.3939 1.66711 10.775 1.8066 11.0758 2.06085L16.9092 7.06001C17.0943 7.21651 17.2431 7.41152 17.3452 7.63144C17.4472 7.85137 17.5001 8.0909 17.5 8.33335V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0119C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0119C2.67559 16.6993 2.5 16.2754 2.5 15.8333V8.33335Z"
            fill="#087889"
          />
          <path
            d="M12.5 17.5V10.8333C12.5 10.6123 12.4122 10.4004 12.2559 10.2441C12.0996 10.0878 11.8877 10 11.6667 10H8.33333C8.11232 10 7.90036 10.0878 7.74408 10.2441C7.5878 10.4004 7.5 10.6123 7.5 10.8333V17.5"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "Messages",
      isActive: false,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.58335 16.6667C8.17384 17.4826 10.0034 17.7036 11.7424 17.2898C13.4814 16.8761 15.0155 15.8549 16.0681 14.4102C17.1208 12.9655 17.6229 11.1923 17.4838 9.41015C17.3448 7.62803 16.5738 5.95416 15.3099 4.69018C14.0459 3.4262 12.372 2.65523 10.5899 2.5162C8.80776 2.37717 7.03458 2.87922 5.58987 3.93189C4.14516 4.98456 3.12393 6.51861 2.71021 8.25761C2.29648 9.99661 2.51747 11.8262 3.33335 13.4167L1.66669 18.3334L6.58335 16.6667Z"
            fill="#CFD8DD"
          />
          <path
            d="M6.66669 10H6.67502"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 10H10.0083"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.3333 10H13.3416"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Records",
      isActive: false,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6667 16.6667C17.1087 16.6667 17.5326 16.4911 17.8452 16.1785C18.1578 15.866 18.3334 15.442 18.3334 15V6.66667C18.3334 6.22464 18.1578 5.80072 17.8452 5.48816C17.5326 5.17559 17.1087 5 16.6667 5H10.0834C9.80462 5.00273 9.52964 4.93551 9.2836 4.80448C9.03757 4.67346 8.82832 4.48281 8.67502 4.25L8.00002 3.25C7.84826 3.01956 7.64167 2.8304 7.39877 2.6995C7.15587 2.56859 6.88428 2.50005 6.60835 2.5H3.33335C2.89133 2.5 2.4674 2.67559 2.15484 2.98816C1.84228 3.30072 1.66669 3.72464 1.66669 4.16667V15C1.66669 15.442 1.84228 15.866 2.15484 16.1785C2.4674 16.4911 2.89133 16.6667 3.33335 16.6667H16.6667Z"
            fill="#CFD8DD"
          />
          <path
            d="M10 8.33331V13.3333"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 10.8333H12.5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Notifications",
      isActive: false,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 6.66669C5 5.3406 5.52678 4.06883 6.46447 3.13115C7.40215 2.19347 8.67392 1.66669 10 1.66669C11.3261 1.66669 12.5979 2.19347 13.5355 3.13115C14.4732 4.06883 15 5.3406 15 6.66669C15 12.5 17.5 14.1667 17.5 14.1667H2.5C2.5 14.1667 5 12.5 5 6.66669Z"
            fill="#CFD8DD"
          />
          <path
            d="M8.58331 17.5C8.7228 17.7537 8.92785 17.9653 9.17706 18.1127C9.42626 18.26 9.71046 18.3378 9.99998 18.3378C10.2895 18.3378 10.5737 18.26 10.8229 18.1127C11.0721 17.9653 11.2772 17.7537 11.4166 17.5"
            stroke="#CFD8DD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white h-20 w-full grid grid-cols-4 gap-1 items-center">
      {navButtons.map((navButton) => (
        <IconButton
          name={navButton.name}
          icon={navButton.icon}
          isActive={navButton.isActive}
        />
      ))}
    </div>
  );
}

interface IconButtonProps {
  name: string;
  isActive: boolean;
  icon: JSX.Element;
}

function IconButton({ name, icon, isActive }: IconButtonProps) {
  return (
    <button className="flex flex-col items-center">
      {icon}
      <span
        className={`${isActive === true ? "text-primary" : "text-secondary"}`}
      >
        {name}
      </span>
    </button>
  );
}
