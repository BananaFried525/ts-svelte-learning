import { restCar } from '$lib/utils/rest'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  const response = await restCar.get(`/car/${params.id}`)
  if (response.status === 200 && response.data) {
    return {
      car: response.data
    }
  }
}