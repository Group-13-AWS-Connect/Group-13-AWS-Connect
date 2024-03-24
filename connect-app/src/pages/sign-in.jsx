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
}