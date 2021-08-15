let token = '4cc3e6c2d725993d661d36c53cddac07b251e2c70fc12a53'

export const server_calls = {
    get: async () => {
        const response = await fetch(``,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to Get data from server')
        }

        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(``,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to Create data from server')
        }

        return await response.json()
    },
    update: async (id: string, data: any = {}) => {
        const response = await fetch(`${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to Update data from server')
        }

        return await response.json()
    },
    delete: async (id: string, data:any = {}) => {
        const response = await fetch(`${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },

        });
    }
}