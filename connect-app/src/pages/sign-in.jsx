export function SignIn() {
    return (       
    <div style={styles.container}>
    <Heading level={1}>Hello {user.username}</Heading>
    <Button onClick={signOut}>Sign out</Button>
    <h2>Amplify Todos</h2>
    <input
      onChange={(event) => setInput('name', event.target.value)}
      style={styles.input}
      value={formState.name}
      placeholder="Name"
    />
    <input
      onChange={(event) => setInput('description', event.target.value)}
      style={styles.input}
      value={formState.description}
      placeholder="Description"
    />
  </div>
    )
};

const styles = {
  container: {
    width: 400,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20
  },
  todo: { marginBottom: 15 },
  input: {
    border: 'none',
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18
  },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: 'black',
    color: 'white',
    outline: 'none',
    fontSize: 18,
    padding: '12px 0px'
  }
};