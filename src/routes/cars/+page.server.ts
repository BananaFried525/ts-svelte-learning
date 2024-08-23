import { restCar } from '$lib/utils/rest'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  const response = await restCar.get('/car')

  if (response.status === 200 && response.data) {
    return {
      total: response.data.length,
      cars: response.data
    }
  } else if (response.status === 400) {
    return {
      total: 0,
      cars: []
    }
  } else {
    throw new Error('Failed to fetch cars')
  }
}