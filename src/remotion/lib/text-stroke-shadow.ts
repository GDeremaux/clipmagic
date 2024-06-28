const textStrokeShadow = (color: string, width: number) => {
  return (
    `-${width}px -${width}px 0px ${color},
    0px        -${width}px 0px ${color},
    ${width}px -${width}px 0px ${color},
    ${width}px  0px        0px ${color},
    ${width}px  ${width}px 0px ${color},
    0px         ${width}px 0px ${color},
    -${width}px  ${width}px 0px ${color},
    -${width}px  0px        0px ${color}`
  );
}

export default textStrokeShadow;