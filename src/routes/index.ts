import {Router} from 'express';
import UserRoutes from "./User.route";
import CustomerRoutes from "./Customers.route";
import CustomerStatsRoutes from "./CustomerStats.route";
import LoginRoute from "./auth.route";
import CountRoute from "./Counts.route"
import AnnaCanteenRoute from "./AnnaCanteen.route";
import APSRTCRoute from "./APSRTC.route";
import PensionRoute from "./Pension.route";
import DeepamRoute from "./Deepam.route";
import EndowmentRoute from "./Endowment.route";
import FertilizersRoute from "./Fertilizers.route";
const router = Router();


router.use("/users", UserRoutes);
router.use("/customers", CustomerRoutes);
router.use("/stats", CustomerStatsRoutes);
router.use("/login", LoginRoute);
router.use("/anna-canteen", AnnaCanteenRoute);
router.use("/apsrtc", APSRTCRoute);
router.use("/pension", PensionRoute);
router.use("/deepam", DeepamRoute);
router.use("/endowment", EndowmentRoute);
router.use("/fertilizers", FertilizersRoute);
router.use("/counts", CountRoute);

export default router;