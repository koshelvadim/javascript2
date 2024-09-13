const List = ({renderItem}) => {

  const list = [
    {id:1, title: 'завтрак'},
    {id:2, title: 'обед'},
    {id:3, title: 'ужин'},
  ];

  return (
    <ul>
      {renderItem(list)}
    </ul>
  )
}

export default List;