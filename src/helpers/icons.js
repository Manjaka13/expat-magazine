import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
	faGithub,
	faLinkedin,
	faFacebook
} from "@fortawesome/free-brands-svg-icons";
import {
	faNewspaper,
	faSearch,
	faTimesCircle,
	faLeaf,
	faCalendarAlt,
	faGears,
	faStar,
	faArrowDownAZ,
	faArrowDownShortWide,
	faList,
	faWarning,
	faMicrophone,
	faLaptop,
	faMouse,
	faBars
} from "@fortawesome/free-solid-svg-icons";

/*
	Import all icons here
*/

// Manually add fontawesome styles
config.autoAddCss = false;

library.add(
	faGithub,
	faLinkedin,
	faFacebook,
	faNewspaper,
	faSearch,
	faTimesCircle,
	faLeaf,
	faCalendarAlt,
	faGears,
	faStar,
	faArrowDownAZ,
	faArrowDownShortWide,
	faList,
	faWarning,
	faMicrophone,
	faLaptop,
	faMouse,
	faBars
);
