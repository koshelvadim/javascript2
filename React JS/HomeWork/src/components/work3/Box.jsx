export const Box = ({theme}) => {

  const boxStyles = {
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '20px',
      border: `1px solid ${theme === 'light' ? '#000' : '#fff'}`,
  }

  return (
      <div style={boxStyles}>
          <h1>{theme === 'light' ? 'Светлая' : 'Темная'} тема</h1>
          <p>Компонент BOX</p>
      </div>
  )
}
