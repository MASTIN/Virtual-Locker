-- For the users table using JawsDB on heroku
USE pc5eekpar48lja4g;
-- For the users table using localhost
USE VirtualLockerDB;

-- Inserting info for the Users table
-- India's pw is 123
-- Mary's pw is 1234
-- Stuart's pw is 12345
INSERT INTO Users (name, email, password, createdAt, updatedAt) VALUES ("India", "india@yahoo.com", "$2a$08$jSBxxEtdgo8y23QSZqTNfeiPxMn75j2CMRFEIitwtL3.uf72k0dh6", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Users (name, email, password, createdAt, updatedAt) VALUES ("Mary", "mary@gmail.com", "$2a$08$xK7WnPiyryMRo6Mn8aAv8Ov80jrGkI55PbZ4dP/rei95VpN/9CFPW", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Users (name, email, password, createdAt, updatedAt) VALUES ("Stuart", "stuart@hotmail.com", "$2a$08$.jrNX0mqZ56hb4q9/u9xxe.OJBS/WUQYbJ7CbWRGUpWbIc.GP8dQ6", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Inserting info for the Items table for UserId 1
INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("TV", "Living Room", "Electronics", 520, "2014-04-16", 845, "GE53BB-81KQH", "http://www.gadgetninja.in/wp-content/uploads/2015/10/VU-40K16-40.jpeg", "Bought it at Best Buy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Bed", "Master Bedroom", "Furniture", 1400, "2011-08-01", 1800, "DJK341189LPMB", "http://www.simplysweethome.com/wp-content/uploads/2013/03/Sleigh-Bed.jpg", "The headboards and frame are from previous bed", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Refrigerator", "Kitchen", "Appliances", 360, "2008-10-14", 780, "MHE783JK-213", "http://www.geappliances.com/assets/images/products/refrigerators-side_by_side.jpg", "Had the freon replaced in 2015", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Grill", "Patio", "Appliances", 150, "2010-03-06", 400, "964MMLRW23", "https://fthmb.tqn.com/xzJ_2PVyZeMrwhMof3a8KziaW-I=/960x0/filters:no_upscale()/about/holland_liberty_BH421AG9-589df03e3df78c4758a5da1f.jpg", "We also have the grill cover for this", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Table", "Dining Room", "Furniture", 390, "2015-01-29", 608, "VCEZZA-PE9355", "http://www.redlinedesignworks.net/wp-content/uploads/2017/05/Tables-For-Dining-Room-Elegant-Glass-Dining-Table-For-Pottery-Barn-Dining-Table.jpg", "1 chair has a leg loose.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("TV", "Master Bedroom", "Electronics", 625, "2017-04-04", 700, "CL84208-MGEW", "http://www.avsforum.com/forum/imagehosting/176625560e116690bd.jpg", "40 inch LCD", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Art work", "Master Bedroom", "Miscellaneous", 200400, "1982-05-01", 175000, "MWLCK-01-5-78", "http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2015/10/28092930/KahlerHero.png", "My Wife's Lovers by Carl Kahler.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Cuisinart Stand Mixer", "Kitchen", "Appliances", 200, "2017-01-09", 250, "SM-50", "https://smhttp-ssl-21049.nexcesscdn.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/m/sm-50bc_-_cuisinart_precision_5.5_quart_stand_mixer_brushed_chrome_1_.jpg", "Works great.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Couch", "Living Room", "Furniture", 1100, "2013-10-10", 1826, "740MUYY", "http://cozycouchsf.com/wp-content/uploads/2016/03/main-image.jpg", "Ethan Allen couch.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Sound System", "Living Room", "Electronics", 1558, "2009-04-02", 2105, "846-MBND-WTRR-576-0098", "https://www.dtv-installations.com/sites/default/files/styles/large/public/surround_sound_system.jpg?itok=Q7s7fUO7", "Left rear speaker needs replacing.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

-- Inserting info for the Items table for UserId 2
INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("China Cabinet", "Dining Room", "Furniture", 650, "2004-10-22", 935, "F3340-NSG", "https://images.furnituredealer.net/img/products%2Ffine_furniture_design%2Fcolor%2Famerican%20cherry_1020-841%2B842-m.jpg", "Passed down from parents.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("TV", "Master Bedroom", "Electronics", 575, "2014-07-06", 950, "7399SQP-05-LMMEP", "https://i5.walmartimages.com/asr/03eb2c61-ed9a-4846-b8ca-3dd5da5c00d1_1.205fe04ef992ba2da948f63a928e1719.jpeg", "The left side is scratched.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Microwave", "Kitchen", "Appliances", 85, "2013-03-22", 330, "RWM0094", "https://i5.walmartimages.ca/images/Enlarge/550/945/6000187550945.jpg", "Popcorn button doesn't work anymore.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Stereo System", "Living Room", "Electronics", 375, "2011-05-18", 825, "34110-PLERT", "https://i.ytimg.com/vi/I16dtFt0Ook/maxresdefault.jpg", "Subwoofer isn't working.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Sectional Couch", "Living Room", "Furniture", 1260, "2015-12-18", 1700, "LPEWMB789990IWQ", "https://images.furnituredealer.net/img/products%2Fbenchcraft%2Fcolor%2Fjustyna_8910216%2B34%2B67-m1.jpg", "Dog peed on the middle pillow.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Dresser", "Master Bedroom", "Furniture", 576, "2003-11-07", 934, "RYW-14403-MLPI", "https://s-media-cache-ak0.pinimg.com/736x/64/35/15/6435154d8f1d29546180c49f5a83848d.jpg", "Mirror is chipped on the top left.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Art photos", "Master Bedroom", "Miscellaneous", 150000, "1998-09-04", 113000, "LAT-RG-040290", "http://photovide.com/wp-content/uploads/2015/02/peter-lik-expensive-photograph-44.jpg", "Late autumn tree by Roger Glasrowe.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Patio Furniture", "Patio", "Furniture", 650, "2010-06-06", 1168, "CLPEU-53656-FHGK-435", "https://www.costco.com/wcsstore/CostcoUSBCCatalogAssetStore/category-tiles/patio-seating-sets.jpg", "Includes all chairs.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Entertainment Unit", "Living Room", "Furniture", 200, "2002-07-15", 506, "975-MBN", "https://images.furnituredealer.net/img/collections%2Fparker_house%2Ftoscano%20consoles_tos-lst-m2.jpg", "Right side door won't close flush.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Knife set", "Kitchen", "Appliances", 1500, "2015-02-06", 1823, "NVFUEKHDF830", "http://i.ebayimg.com/00/$T2eC16NHJGIFFov1gCO7BSB3Fkhveg~~_32.JPG", "Includes a sharpener.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);

-- Inserting info for the Items table for UserId 3
INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Xbox One", "Man Cave", "Electronics", 267, "2016-06-23", 475, "XB840-LL-PENR4", "https://cnet2.cbsistatic.com/img/E0iJ-0JHskR1zcOGqv-qHy8qvXE=/fit-in/970x0/2013/11/25/f21beedc-02cf-496c-8923-4a1a8a4fe550/XBox_One_35657846_02_610x436.jpg", "Includes 13 games and 1 controller.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Ms. Pac Man coin-op video game", "Man Cave", "Electronics", 1950, "2014-07-06", 2644, "MSPAC-16041992", "http://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/RZYAAOSwr7ZW7cZ1/$_1.JPG", "I have the top high scores!", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Popcorn Maker", "Man Cave", "Appliances", 170, "2016-02-20", 300, "AYQQ-9722-PLP-0445", "https://secure.img2-fg.wfcdn.com/lf/maxsquare/hash/24811/15064559/1/8%2Boz.%2BSideshow%2BHot%2BOil%2BKettle%2BPopcorn%2BMachine.jpg", "Includes 300 bags.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("TV", "Man Cave", "Electronics", 2100, "2017-02-11", 3055, "BLW-9923MQJJ-95", "http://cdn3.sbnation.com/imported_assets/2002273/samsung-curved-tvs11_2040_verge_super_wide_medium.jpg", "55 inch plasma screen.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Full bar", "Man Cave", "Furniture", 3400, "2012-12-02", 4573, "KWLLP-54644-567-124", "http://www.mybadpad.com/wp-content/uploads/2017/01/b53c32bd-098a-4d71-8820-db3dc5b207f7.jpg", "Dart game in picture was sold in 2015.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Bed", "Guest Room 1", "Furniture", 620, "2014-10-06", 880, "MGEO843-43-MNG", "https://s-media-cache-ak0.pinimg.com/736x/f7/66/7d/f7667d2d2a65c95bd47d86160f21f1cf.jpg", "New pillows bought in 2017.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Candy Wall", "Man Cave", "Miscellaneous", 109000, "2016-12-01", 122000, "MMBETYT-346754-MNDO", "https://fortunedotcom.files.wordpress.com/2017/01/bel-air-10-candywall-300dpi.jpg", "Filled with Jelly beans!!!", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Dresser", "Guest Room 1", "Furniture", 95, "1983-08-02", 590, "NDWY-7HN8956", "https://ak1.ostkcdn.com/images/products/2209002/Broadway-Black-6-drawer-Dresser-P10469074.jpg", "Water marks on top.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Bed", "Master Bedroom", "Furniture", 950, "2015-03-03", 1300, "MHFR-67985-JHDBV", "http://i.ebayimg.com/00/s/NTM0WDgwMA==/z/KwMAAOSwZd1VWvS5/$_32.JPG", "Adjustable bed", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);

INSERT INTO Items (item_name, location, category, value, date_purchased, purchase_price, serial_number, image, notes, createdAt, updatedAt, UserId)
VALUES ("Clock", "Master Bedroom", "Miscellaneous", 255, "2003-11-10", 327, "8465-MNBD", "http://cdn.decoist.com/wp-content/uploads/2013/07/Wall-clocks-offer-a-gorgeous-element-of-classical-architecture.jpg", "Clock was purchsed at an auction", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);
