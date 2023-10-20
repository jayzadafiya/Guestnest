import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id",  verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin,  deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);



// router.post("/", async (req, res) => {
//   const newHotel = new Hotel(req.body)

//   try {
//     const saveHotel = await newHotel.save()
//     res.status(100).json(saveHotel)
//   } catch (err) {
//     res.status(500).json(err)
//   }

// })

// //update
// router.put("/:id", async (req, res) => {

//   try {
//     const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
//     // $set is mongodb set method use to change id  and new is use to asign new id 
//     res.status(100).json(updateHotel)
//   } catch (err) {
//     res.status(500).json(err)
//   }

// })

// //deleted

// router.delete("/:id", async (req, res) => {

//   try {
//     await Hotel.findByIdAndDelete(req.params.id)  ;
//     res.status(100).json("hotel has been deleted")
//   } catch (err) {
//     res.status(500).json(err)
//   }

// })

// //get
// router.get("/:id", async (req, res) => {

//   try {
//     const hotel = await Hotel.findByIdAndUpdate(req.params.id)

//     // res.send(hotel);
//     res.status(100).json(hotel)
//   } catch (err) {
//     res.status(500).json(err)
//   }

// })

// //get all 
// router.get("/", async (req, res) => {

//   try {
//     const hotels = await Hotel.find()
//     res.send(hotels);
//     res.status(100).json(hotels)
//   } catch (err) {
//     res.status(500).json(err)
//   }

// })

export default router;
