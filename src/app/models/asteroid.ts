export interface Asteroid {
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: any;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: Array<any>;
  orbital_data: any;
}
