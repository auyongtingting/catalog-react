
export interface launchData {
  /** UNIX timestamp of launch   */ launch_date_local: string;
  /** Launch mission name   */ mission_name: string;
  /** Rocket name   */ rocket: { rocket_name: string };
  /** Launch site   */ launch_site: { site_name: string };
  /** Object containing array of image urls */
  links: {
    flickr_images: [string | undefined];
  };
}

export interface spaceXSite {
  /** Array of spaceXSitesData   */
  data: launchData[];
}


export interface spaceXGQL {
    /** Dynamic keys of spaceXSite objects   */
    [data: string]: spaceXSite[];
  }




