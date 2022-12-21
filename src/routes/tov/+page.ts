import type { PageLoad } from "./$types";
import { redirect } from '@sveltejs/kit';
import { getslug } from '$lib/helper';

export const load: PageLoad = async ({params}) => {
  throw redirect(307, '/');
}
