import express from "express";
const router = express.Router();
import multer from "multer";
import path from "path";
import Employee from "../model/employeeModel.js";
import { v4 as uuidv4 } from "uuid";
import { read } from "fs";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "images");
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
    },
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "application/pdf",
    ];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

let upload = multer({ storage, fileFilter });

// const upload = multer({ dest: 'uploads/' })

const uploadMiddleware = upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "gallery", maxCount: 8 },
]);

// const uploadMiddleware = upload.fields([{ name: 'file', maxCount: 1 }, { name: 'pdf', maxCount: 1 }])
router.post("/create", uploadMiddleware, async (req, res) => {
    var pro_image = "";
    if (typeof req.files.avatar !== "undefined") {
        pro_image = req.files.avatar[0].filename;
    } else {
        pro_image = "";
    }

    var emp_resume = "";
    if (typeof req.files.gallery !== "undefined") {
        emp_resume = req.files.gallery[0].filename;
    } else {
        emp_resume = "";
    }

    console.log("emp_resume==", emp_resume);
    console.log("pro_image==", pro_image);
    const employee = new Employee({
        empName: req.body.empName,
        empEmail: req.body.empEmail,
        empMobile: req.body.empMobile,
        empStatus: req.body.empStatus,
        empPhoto: pro_image,
        empResume: emp_resume,
    });
    const newEmployee = await employee.save();
    if (newEmployee) {
        return res.status(201).send({
            message: "New Employee Inserted",
            data: newEmployee,
        });
    }
    return res.status(500).send({ message: " Error in Inserting Employee." });
});

router.post("/create1", async (req, res) => {
    const employee = new Employee({
        empName: req.body.empName,
        empEmail: req.body.empEmail,
    });
    const newEmployee = await employee.save();
    if (newEmployee) {
        return res.status(201).send({
            message: "New Employee Inserted",
            data: newEmployee,
        });
    }
    return res.status(500).send({ message: " Error in Inserting Employee." });
});

router.get("/", async (req, res) => {
    let findEmployee = await Employee.find();
    res.json(findEmployee);
});

router.put("/:id", async (req, res) => {
    try {
        let updateEmployee = await Employee.findById(req.params.id);
        const data = {
            empName: req.body.empName,
            empEmail: req.body.empEmail,
            empMobile: req.body.empMobile,
            empStatus: req.body.empStatus,
        };
        updateEmployee = await Employee.findByIdAndUpdate(req.params.id, data, {
            new: true,
        });
        res.json(updateEmployee);
    } catch (err) {
        console.log(err);
    }
});
//Delete
router.delete("/:id", async (req, res) => {
    var deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (deletedEmployee) {
        res.json(deletedEmployee);
    } else {
        res.send("Error in Deletion.");
    }
});

export default router;
// module.exports = router;
