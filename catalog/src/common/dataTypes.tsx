/** Child **/ 
export interface launchData {
  mission_name: string; /** Mission Name **/ 
  launch_date_local: string; /** Local Launch Date **/ 
  launch_site: {
    site_name: string /** Launch Site Name **/ 
  };
  links : {
    flickr_images: string /** Launch Images **/ 
  };
  rocket: {
    rocket_name: string /** Rocket Name **/ 
  };
}

/** Parent **/ 
export interface spaceXSite {
  /** Array of data from each launch - launchData  */
  launchesPast: launchData[];
}

/** Grandparent **/ 
export interface spaceXGQL {
    [data: string]: spaceXSite;
  }




