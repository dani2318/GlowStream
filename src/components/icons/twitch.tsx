import React from "react";

type Props = {
  className?: string;
  width?: number;
  height?: number;
};

const TwitchIcon: React.FC<Props> = ({
  className = "",
  width = 64,
  height = 64,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width={width}
      height={height}
      viewBox="0 0 512 512"
      className={className}
      aria-label="Twitch Logo Icon"
    >
      <title>ionicons-v5_logos</title>
      <path d="M80,32,48,112V416h96v64h64l64-64h80L464,304V32ZM416,288l-64,64H256l-64,64V352H112V80H416Z" />
      <rect x="320" y="143" width="48" height="129" />
      <rect x="208" y="143" width="48" height="129" />
    </svg>
  );
};

export default TwitchIcon;
