import { ConfigAPI } from './config_api'
export const formLoader = async () => {
  const countries = await new ConfigAPI().countriesList()
  const techStack = await new ConfigAPI().techStackList()

  return {
    countries,
    techStack
  }
}
