interface IProps {
  stroke?: string;
}

const Account = ({ stroke }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={28}
    fill="none"
  >
    <path
      fill={stroke ? stroke : "#A2A2A8"}
      d="M14.52 6a5.115 5.115 0 0 0-2.815.843 5.015 5.015 0 0 0-1.866 2.244 4.939 4.939 0 0 0-.289 2.889 4.98 4.98 0 0 0 1.387 2.56 5.088 5.088 0 0 0 2.594 1.368 5.13 5.13 0 0 0 2.928-.285 5.053 5.053 0 0 0 2.274-1.841A4.954 4.954 0 0 0 19.587 11a4.967 4.967 0 0 0-1.485-3.536A5.101 5.101 0 0 0 14.52 6Z"
    />
    <path
      fill={stroke ? stroke : "#A2A2A8"}
      d="M14.52 0C11.714 0 8.97.821 6.638 2.36a14.042 14.042 0 0 0-5.225 6.282 13.83 13.83 0 0 0-.807 8.09A13.944 13.944 0 0 0 4.488 23.9a14.247 14.247 0 0 0 7.264 3.831c2.752.54 5.605.263 8.197-.797a14.147 14.147 0 0 0 6.367-5.156A13.87 13.87 0 0 0 28.706 14a13.923 13.923 0 0 0-4.16-9.895A14.3 14.3 0 0 0 14.52 0Zm8.099 22.926a4.97 4.97 0 0 0-1.508-3.484A5.104 5.104 0 0 0 17.56 18h-6.08a5.104 5.104 0 0 0-3.55 1.442 4.97 4.97 0 0 0-1.509 3.484 11.972 11.972 0 0 1-3.716-6.113 11.851 11.851 0 0 1 .454-7.115 12.026 12.026 0 0 1 4.464-5.605 12.274 12.274 0 0 1 6.897-2.118c2.464 0 4.87.738 6.898 2.118a12.026 12.026 0 0 1 4.464 5.605 11.852 11.852 0 0 1 .454 7.115 11.972 11.972 0 0 1-3.716 6.113h-.002Z"
    />
  </svg>
)
export default Account;
