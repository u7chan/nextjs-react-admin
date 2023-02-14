import * as React from 'react'
import { Admin, Resource, List, Datagrid, TextField } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const PostList = (props: any) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='title' />
                <TextField source='body' />
            </Datagrid>
        </List>
    )
}

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name='posts' list={PostList} />
        {/* <Resource name="comments" list={ListGuesser} /> */}
    </Admin>
)

export default App
