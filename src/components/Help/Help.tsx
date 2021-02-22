interface Props {
  page: number;
}

const Help = (props: Props) => {
  const { page } = props;
  switch (page) {
    case 0: {
      return <div></div>
    }
  }
  return <div></div>
}

export default Help;
