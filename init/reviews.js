const sampleReviews = [
  {
    comment: `Our stay at this property was absolutely wonderful. The host was very kind and accommodating, and the location was perfect. We enjoyed every moment, from the cozy rooms to the scenic views. I would definitely recommend this place to anyone looking for a peaceful and rejuvenating getaway. Worth every penny spent here.`,
    rating: 4
  },
  {
    comment: `I had a fantastic time at this location. The room was clean, well-decorated, and had everything we needed. The surroundings were calm and peaceful, which made for a relaxing vacation. The staff were helpful and quick to respond. I would come back without a doubt and recommend it to all my friends.`,
    rating: 5
  },
  {
    comment: `This place exceeded all our expectations. The photos online do not do justice to how beautiful the place really is. We were greeted warmly and had a seamless check-in process. Everything from the bed to the bathroom was spotlessly clean. It's a perfect retreat for couples or solo travelers. Highly recommended.`,
    rating: 2
  },
  {
    comment: `If you're looking for a perfect escape, this is the place to be. The location was just far enough from the city to be quiet, but close enough for convenience. The ambiance, décor, and hospitality made us feel right at home. I'd definitely give this property a five-star rating for sure.`,
    rating: 2
  },
  {
    comment: `From the moment we arrived, we felt welcomed and comfortable. The amenities were top-notch and the attention to detail was impressive. It felt like every little need had already been thought of. We truly appreciated the peaceful surroundings and would love to return again in the near future. A gem of a place.`,
    rating: 5
  },
  {
    comment: `I was blown away by how well-maintained and beautiful the property was. Every corner of the house was thoughtfully designed. It had such a cozy and warm vibe that we didn’t want to leave. The natural light, comfortable furniture, and charming surroundings made this one of my best stays ever.`,
    rating: 2
  },
  {
    comment: `Our vacation was made memorable by staying at this beautiful property. It was clean, spacious, and very tastefully decorated. The environment was tranquil and relaxing, just what we needed for a break. The host went above and beyond to make sure everything was perfect. I highly recommend staying here.`,
    rating: 5
  },
  {
    comment: `Absolutely stunning property with breathtaking views. The house was sparkling clean, and the host was incredibly helpful. The attention to detail was noticeable in every room. It’s rare to find such a perfect blend of comfort and style in one place. I’m already planning my next visit here.`,
    rating: 4
  },
  {
    comment: `My experience here was nothing short of amazing. The host provided clear instructions and was very responsive to questions. The rooms were well-kept and smelled fresh. I particularly loved the outdoor space, which was perfect for relaxing. This place truly felt like a home away from home.`,
    rating: 4
  },
  {
    comment: `A delightful stay that surpassed our expectations. The accommodation was even better than described, and the setting was serene. We enjoyed morning coffee on the porch and spent our evenings exploring the nearby attractions. I’ve stayed at many rentals, and this is easily among the best. Will revisit soon.`,
    rating: 1
  },
  {
    comment: `Our stay at this property was absolutely wonderful. The host was very kind and accommodating, and the location was perfect. We enjoyed every moment, from the cozy rooms to the scenic views. I would definitely recommend this place to anyone looking for a peaceful and rejuvenating getaway. Worth every penny spent here.`,
    rating: 4
  },
  {
    comment: `I had a fantastic time at this location. The room was clean, well-decorated, and had everything we needed. The surroundings were calm and peaceful, which made for a relaxing vacation. The staff were helpful and quick to respond. I would come back without a doubt and recommend it to all my friends.`,
    rating: 3
  },
  {
    comment: `This place exceeded all our expectations. The photos online do not do justice to how beautiful the place really is. We were greeted warmly and had a seamless check-in process. Everything from the bed to the bathroom was spotlessly clean. It's a perfect retreat for couples or solo travelers. Highly recommended.`,
    rating: 4
  },
  {
    comment: `If you're looking for a perfect escape, this is the place to be. The location was just far enough from the city to be quiet, but close enough for convenience. The ambiance, décor, and hospitality made us feel right at home. I'd definitely give this property a five-star rating for sure.`,
    rating: 1
  },
  {
    comment: `From the moment we arrived, we felt welcomed and comfortable. The amenities were top-notch and the attention to detail was impressive. It felt like every little need had already been thought of. We truly appreciated the peaceful surroundings and would love to return again in the near future. A gem of a place.`,
    rating: 4
  },
  {
    comment: `I was blown away by how well-maintained and beautiful the property was. Every corner of the house was thoughtfully designed. It had such a cozy and warm vibe that we didn’t want to leave. The natural light, comfortable furniture, and charming surroundings made this one of my best stays ever.`,
    rating: 2
  },
  {
    comment: `Our vacation was made memorable by staying at this beautiful property. It was clean, spacious, and very tastefully decorated. The environment was tranquil and relaxing, just what we needed for a break. The host went above and beyond to make sure everything was perfect. I highly recommend staying here.`,
    rating: 3
  },
  {
    comment: `Absolutely stunning property with breathtaking views. The house was sparkling clean, and the host was incredibly helpful. The attention to detail was noticeable in every room. It’s rare to find such a perfect blend of comfort and style in one place. I’m already planning my next visit here.`,
    rating: 4
  },
  {
    comment: `My experience here was nothing short of amazing. The host provided clear instructions and was very responsive to questions. The rooms were well-kept and smelled fresh. I particularly loved the outdoor space, which was perfect for relaxing. This place truly felt like a home away from home.`,
    rating: 2
  },
  {
    comment: `A delightful stay that surpassed our expectations. The accommodation was even better than described, and the setting was serene. We enjoyed morning coffee on the porch and spent our evenings exploring the nearby attractions. I’ve stayed at many rentals, and this is easily among the best. Will revisit soon.`,
    rating: 3
  },
  {
    comment: `Our stay at this property was absolutely wonderful. The host was very kind and accommodating, and the location was perfect. We enjoyed every moment, from the cozy rooms to the scenic views. I would definitely recommend this place to anyone looking for a peaceful and rejuvenating getaway. Worth every penny spent here.`,
    rating: 2
  },
  {
    comment: `I had a fantastic time at this location. The room was clean, well-decorated, and had everything we needed. The surroundings were calm and peaceful, which made for a relaxing vacation. The staff were helpful and quick to respond. I would come back without a doubt and recommend it to all my friends.`,
    rating: 2
  },
  {
    comment: `This place exceeded all our expectations. The photos online do not do justice to how beautiful the place really is. We were greeted warmly and had a seamless check-in process. Everything from the bed to the bathroom was spotlessly clean. It's a perfect retreat for couples or solo travelers. Highly recommended.`,
    rating: 1
  },
  {
    comment: `If you're looking for a perfect escape, this is the place to be. The location was just far enough from the city to be quiet, but close enough for convenience. The ambiance, décor, and hospitality made us feel right at home. I'd definitely give this property a five-star rating for sure.`,
    rating: 4
  },
  {
    comment: `From the moment we arrived, we felt welcomed and comfortable. The amenities were top-notch and the attention to detail was impressive. It felt like every little need had already been thought of. We truly appreciated the peaceful surroundings and would love to return again in the near future. A gem of a place.`,
    rating: 4
  },
  {
    comment: `I was blown away by how well-maintained and beautiful the property was. Every corner of the house was thoughtfully designed. It had such a cozy and warm vibe that we didn’t want to leave. The natural light, comfortable furniture, and charming surroundings made this one of my best stays ever.`,
    rating: 4
  },
  {
    comment: `Our vacation was made memorable by staying at this beautiful property. It was clean, spacious, and very tastefully decorated. The environment was tranquil and relaxing, just what we needed for a break. The host went above and beyond to make sure everything was perfect. I highly recommend staying here.`,
    rating: 4
  },
  {
    comment: `Absolutely stunning property with breathtaking views. The house was sparkling clean, and the host was incredibly helpful. The attention to detail was noticeable in every room. It’s rare to find such a perfect blend of comfort and style in one place. I’m already planning my next visit here.`,
    rating: 3
  },
  {
    comment: `My experience here was nothing short of amazing. The host provided clear instructions and was very responsive to questions. The rooms were well-kept and smelled fresh. I particularly loved the outdoor space, which was perfect for relaxing. This place truly felt like a home away from home.`,
    rating: 5
  },
  {
    comment: `A delightful stay that surpassed our expectations. The accommodation was even better than described, and the setting was serene. We enjoyed morning coffee on the porch and spent our evenings exploring the nearby attractions. I’ve stayed at many rentals, and this is easily among the best. Will revisit soon.`,
    rating: 4
  },
  {
    comment: `Our stay at this property was absolutely wonderful. The host was very kind and accommodating, and the location was perfect. We enjoyed every moment, from the cozy rooms to the scenic views. I would definitely recommend this place to anyone looking for a peaceful and rejuvenating getaway. Worth every penny spent here.`,
    rating: 1
  },
  {
    comment: `I had a fantastic time at this location. The room was clean, well-decorated, and had everything we needed. The surroundings were calm and peaceful, which made for a relaxing vacation. The staff were helpful and quick to respond. I would come back without a doubt and recommend it to all my friends.`,
    rating: 4
  },
  {
    comment: `This place exceeded all our expectations. The photos online do not do justice to how beautiful the place really is. We were greeted warmly and had a seamless check-in process. Everything from the bed to the bathroom was spotlessly clean. It's a perfect retreat for couples or solo travelers. Highly recommended.`,
    rating: 3
  },
  {
    comment: `If you're looking for a perfect escape, this is the place to be. The location was just far enough from the city to be quiet, but close enough for convenience. The ambiance, décor, and hospitality made us feel right at home. I'd definitely give this property a five-star rating for sure.`,
    rating: 3
  },
  {
    comment: `From the moment we arrived, we felt welcomed and comfortable. The amenities were top-notch and the attention to detail was impressive. It felt like every little need had already been thought of. We truly appreciated the peaceful surroundings and would love to return again in the near future. A gem of a place.`,
    rating: 1
  },
  {
    comment: `I was blown away by how well-maintained and beautiful the property was. Every corner of the house was thoughtfully designed. It had such a cozy and warm vibe that we didn’t want to leave. The natural light, comfortable furniture, and charming surroundings made this one of my best stays ever.`,
    rating: 3
  },
  {
    comment: `Our vacation was made memorable by staying at this beautiful property. It was clean, spacious, and very tastefully decorated. The environment was tranquil and relaxing, just what we needed for a break. The host went above and beyond to make sure everything was perfect. I highly recommend staying here.`,
    rating: 1
  },
  {
    comment: `Absolutely stunning property with breathtaking views. The house was sparkling clean, and the host was incredibly helpful. The attention to detail was noticeable in every room. It’s rare to find such a perfect blend of comfort and style in one place. I’m already planning my next visit here.`,
    rating: 5
  },
  {
    comment: `My experience here was nothing short of amazing. The host provided clear instructions and was very responsive to questions. The rooms were well-kept and smelled fresh. I particularly loved the outdoor space, which was perfect for relaxing. This place truly felt like a home away from home.`,
    rating: 1
  },
  {
    comment: `A delightful stay that surpassed our expectations. The accommodation was even better than described, and the setting was serene. We enjoyed morning coffee on the porch and spent our evenings exploring the nearby attractions. I’ve stayed at many rentals, and this is easily among the best. Will revisit soon.`,
    rating: 2
  },
  {
    comment: `Our stay at this property was absolutely wonderful. The host was very kind and accommodating, and the location was perfect. We enjoyed every moment, from the cozy rooms to the scenic views. I would definitely recommend this place to anyone looking for a peaceful and rejuvenating getaway. Worth every penny spent here.`,
    rating: 4
  },
  {
    comment: `I had a fantastic time at this location. The room was clean, well-decorated, and had everything we needed. The surroundings were calm and peaceful, which made for a relaxing vacation. The staff were helpful and quick to respond. I would come back without a doubt and recommend it to all my friends.`,
    rating: 4
  },
  {
    comment: `This place exceeded all our expectations. The photos online do not do justice to how beautiful the place really is. We were greeted warmly and had a seamless check-in process. Everything from the bed to the bathroom was spotlessly clean. It's a perfect retreat for couples or solo travelers. Highly recommended.`,
    rating: 1
  },
  {
    comment: `If you're looking for a perfect escape, this is the place to be. The location was just far enough from the city to be quiet, but close enough for convenience. The ambiance, décor, and hospitality made us feel right at home. I'd definitely give this property a five-star rating for sure.`,
    rating: 2
  },
  {
    comment: `From the moment we arrived, we felt welcomed and comfortable. The amenities were top-notch and the attention to detail was impressive. It felt like every little need had already been thought of. We truly appreciated the peaceful surroundings and would love to return again in the near future. A gem of a place.`,
    rating: 5
  },
  {
    comment: `I was blown away by how well-maintained and beautiful the property was. Every corner of the house was thoughtfully designed. It had such a cozy and warm vibe that we didn’t want to leave. The natural light, comfortable furniture, and charming surroundings made this one of my best stays ever.`,
    rating: 4
  },
  {
    comment: `Our vacation was made memorable by staying at this beautiful property. It was clean, spacious, and very tastefully decorated. The environment was tranquil and relaxing, just what we needed for a break. The host went above and beyond to make sure everything was perfect. I highly recommend staying here.`,
    rating: 5
  },
  {
    comment: `Absolutely stunning property with breathtaking views. The house was sparkling clean, and the host was incredibly helpful. The attention to detail was noticeable in every room. It’s rare to find such a perfect blend of comfort and style in one place. I’m already planning my next visit here.`,
    rating: 3
  },
  {
    comment: `My experience here was nothing short of amazing. The host provided clear instructions and was very responsive to questions. The rooms were well-kept and smelled fresh. I particularly loved the outdoor space, which was perfect for relaxing. This place truly felt like a home away from home.`,
    rating: 1
  },
  {
    comment: `A delightful stay that surpassed our expectations. The accommodation was even better than described, and the setting was serene. We enjoyed morning coffee on the porch and spent our evenings exploring the nearby attractions. I’ve stayed at many rentals, and this is easily among the best. Will revisit soon.`,
    rating: 1
  },
  {
    comment: `Our stay at this property was absolutely wonderful. The host was very kind and accommodating, and the location was perfect. We enjoyed every moment, from the cozy rooms to the scenic views. I would definitely recommend this place to anyone looking for a peaceful and rejuvenating getaway. Worth every penny spent here.`,
    rating: 2
  },
  {
    comment: `I had a fantastic time at this location. The room was clean, well-decorated, and had everything we needed. The surroundings were calm and peaceful, which made for a relaxing vacation. The staff were helpful and quick to respond. I would come back without a doubt and recommend it to all my friends.`,
    rating: 1
  },
  {
    comment: `This place exceeded all our expectations. The photos online do not do justice to how beautiful the place really is. We were greeted warmly and had a seamless check-in process. Everything from the bed to the bathroom was spotlessly clean. It's a perfect retreat for couples or solo travelers. Highly recommended.`,
    rating: 1
  },
  {
    comment: `If you're looking for a perfect escape, this is the place to be. The location was just far enough from the city to be quiet, but close enough for convenience. The ambiance, décor, and hospitality made us feel right at home. I'd definitely give this property a five-star rating for sure.`,
    rating: 4
  },
  {
    comment: `From the moment we arrived, we felt welcomed and comfortable. The amenities were top-notch and the attention to detail was impressive. It felt like every little need had already been thought of. We truly appreciated the peaceful surroundings and would love to return again in the near future. A gem of a place.`,
    rating: 4
  },
  {
    comment: `I was blown away by how well-maintained and beautiful the property was. Every corner of the house was thoughtfully designed. It had such a cozy and warm vibe that we didn’t want to leave. The natural light, comfortable furniture, and charming surroundings made this one of my best stays ever.`,
    rating: 3
  },
  {
    comment: `Our vacation was made memorable by staying at this beautiful property. It was clean, spacious, and very tastefully decorated. The environment was tranquil and relaxing, just what we needed for a break. The host went above and beyond to make sure everything was perfect. I highly recommend staying here.`,
    rating: 4
  },
  {
    comment: `Absolutely stunning property with breathtaking views. The house was sparkling clean, and the host was incredibly helpful. The attention to detail was noticeable in every room. It’s rare to find such a perfect blend of comfort and style in one place. I’m already planning my next visit here.`,
    rating: 4
  },
  {
    comment: `My experience here was nothing short of amazing. The host provided clear instructions and was very responsive to questions. The rooms were well-kept and smelled fresh. I particularly loved the outdoor space, which was perfect for relaxing. This place truly felt like a home away from home.`,
    rating: 3
  },
  {
    comment: `A delightful stay that surpassed our expectations. The accommodation was even better than described, and the setting was serene. We enjoyed morning coffee on the porch and spent our evenings exploring the nearby attractions. I’ve stayed at many rentals, and this is easily among the best. Will revisit soon.`,
    rating: 2
  },
  {
    comment: `Our stay at this property was absolutely wonderful. The host was very kind and accommodating, and the location was perfect. We enjoyed every moment, from the cozy rooms to the scenic views. I would definitely recommend this place to anyone looking for a peaceful and rejuvenating getaway. Worth every penny spent here.`,
    rating: 5
  },
  {
    comment: `I had a fantastic time at this location. The room was clean, well-decorated, and had everything we needed. The surroundings were calm and peaceful, which made for a relaxing vacation. The staff were helpful and quick to respond. I would come back without a doubt and recommend it to all my friends.`,
    rating: 2
  },
  {
    comment: `This place exceeded all our expectations. The photos online do not do justice to how beautiful the place really is. We were greeted warmly and had a seamless check-in process. Everything from the bed to the bathroom was spotlessly clean. It's a perfect retreat for couples or solo travelers. Highly recommended.`,
    rating: 1
  },
  {
    comment: `If you're looking for a perfect escape, this is the place to be. The location was just far enough from the city to be quiet, but close enough for convenience. The ambiance, décor, and hospitality made us feel right at home. I'd definitely give this property a five-star rating for sure.`,
    rating: 5
  },
  {
    comment: `From the moment we arrived, we felt welcomed and comfortable. The amenities were top-notch and the attention to detail was impressive. It felt like every little need had already been thought of. We truly appreciated the peaceful surroundings and would love to return again in the near future. A gem of a place.`,
    rating: 5
  },
  {
    comment: `I was blown away by how well-maintained and beautiful the property was. Every corner of the house was thoughtfully designed. It had such a cozy and warm vibe that we didn’t want to leave. The natural light, comfortable furniture, and charming surroundings made this one of my best stays ever.`,
    rating: 4
  },
  {
    comment: `Our vacation was made memorable by staying at this beautiful property. It was clean, spacious, and very tastefully decorated. The environment was tranquil and relaxing, just what we needed for a break. The host went above and beyond to make sure everything was perfect. I highly recommend staying here.`,
    rating: 1
  },
  {
    comment: `Absolutely stunning property with breathtaking views. The house was sparkling clean, and the host was incredibly helpful. The attention to detail was noticeable in every room. It’s rare to find such a perfect blend of comfort and style in one place. I’m already planning my next visit here.`,
    rating: 4
  },
  {
    comment: `My experience here was nothing short of amazing. The host provided clear instructions and was very responsive to questions. The rooms were well-kept and smelled fresh. I particularly loved the outdoor space, which was perfect for relaxing. This place truly felt like a home away from home.`,
    rating: 4
  },
  {
    comment: `A delightful stay that surpassed our expectations. The accommodation was even better than described, and the setting was serene. We enjoyed morning coffee on the porch and spent our evenings exploring the nearby attractions. I’ve stayed at many rentals, and this is easily among the best. Will revisit soon.`,
    rating: 1
  },
  {
    comment: `Our stay at this property was absolutely wonderful. The host was very kind and accommodating, and the location was perfect. We enjoyed every moment, from the cozy rooms to the scenic views. I would definitely recommend this place to anyone looking for a peaceful and rejuvenating getaway. Worth every penny spent here.`,
    rating: 1
  },
  {
    comment: `I had a fantastic time at this location. The room was clean, well-decorated, and had everything we needed. The surroundings were calm and peaceful, which made for a relaxing vacation. The staff were helpful and quick to respond. I would come back without a doubt and recommend it to all my friends.`,
    rating: 3
  },
  {
    comment: `This place exceeded all our expectations. The photos online do not do justice to how beautiful the place really is. We were greeted warmly and had a seamless check-in process. Everything from the bed to the bathroom was spotlessly clean. It's a perfect retreat for couples or solo travelers. Highly recommended.`,
    rating: 5
  },
  {
    comment: `If you're looking for a perfect escape, this is the place to be. The location was just far enough from the city to be quiet, but close enough for convenience. The ambiance, décor, and hospitality made us feel right at home. I'd definitely give this property a five-star rating for sure.`,
    rating: 4
  },
  {
    comment: `From the moment we arrived, we felt welcomed and comfortable. The amenities were top-notch and the attention to detail was impressive. It felt like every little need had already been thought of. We truly appreciated the peaceful surroundings and would love to return again in the near future. A gem of a place.`,
    rating: 4
  },
  {
    comment: `I was blown away by how well-maintained and beautiful the property was. Every corner of the house was thoughtfully designed. It had such a cozy and warm vibe that we didn’t want to leave. The natural light, comfortable furniture, and charming surroundings made this one of my best stays ever.`,
    rating: 2
  },
  {
    comment: `Our vacation was made memorable by staying at this beautiful property. It was clean, spacious, and very tastefully decorated. The environment was tranquil and relaxing, just what we needed for a break. The host went above and beyond to make sure everything was perfect. I highly recommend staying here.`,
    rating: 5
  },
  {
    comment: `Absolutely stunning property with breathtaking views. The house was sparkling clean, and the host was incredibly helpful. The attention to detail was noticeable in every room. It’s rare to find such a perfect blend of comfort and style in one place. I’m already planning my next visit here.`,
    rating: 4
  },
  {
    comment: `My experience here was nothing short of amazing. The host provided clear instructions and was very responsive to questions. The rooms were well-kept and smelled fresh. I particularly loved the outdoor space, which was perfect for relaxing. This place truly felt like a home away from home.`,
    rating: 1
  },
  {
    comment: `A delightful stay that surpassed our expectations. The accommodation was even better than described, and the setting was serene. We enjoyed morning coffee on the porch and spent our evenings exploring the nearby attractions. I’ve stayed at many rentals, and this is easily among the best. Will revisit soon.`,
    rating: 1
  },
  {
    comment: `Our stay at this property was absolutely wonderful. The host was very kind and accommodating, and the location was perfect. We enjoyed every moment, from the cozy rooms to the scenic views. I would definitely recommend this place to anyone looking for a peaceful and rejuvenating getaway. Worth every penny spent here.`,
    rating: 5
  },
  {
    comment: `I had a fantastic time at this location. The room was clean, well-decorated, and had everything we needed. The surroundings were calm and peaceful, which made for a relaxing vacation. The staff were helpful and quick to respond. I would come back without a doubt and recommend it to all my friends.`,
    rating: 4
  },
  {
    comment: `This place exceeded all our expectations. The photos online do not do justice to how beautiful the place really is. We were greeted warmly and had a seamless check-in process. Everything from the bed to the bathroom was spotlessly clean. It's a perfect retreat for couples or solo travelers. Highly recommended.`,
    rating: 2
  },
  {
    comment: `If you're looking for a perfect escape, this is the place to be. The location was just far enough from the city to be quiet, but close enough for convenience. The ambiance, décor, and hospitality made us feel right at home. I'd definitely give this property a five-star rating for sure.`,
    rating: 2
  },
  {
    comment: `From the moment we arrived, we felt welcomed and comfortable. The amenities were top-notch and the attention to detail was impressive. It felt like every little need had already been thought of. We truly appreciated the peaceful surroundings and would love to return again in the near future. A gem of a place.`,
    rating: 3
  },
  {
    comment: `I was blown away by how well-maintained and beautiful the property was. Every corner of the house was thoughtfully designed. It had such a cozy and warm vibe that we didn’t want to leave. The natural light, comfortable furniture, and charming surroundings made this one of my best stays ever.`,
    rating: 4
  },
  {
    comment: `Our vacation was made memorable by staying at this beautiful property. It was clean, spacious, and very tastefully decorated. The environment was tranquil and relaxing, just what we needed for a break. The host went above and beyond to make sure everything was perfect. I highly recommend staying here.`,
    rating: 2
  },
  {
    comment: `Absolutely stunning property with breathtaking views. The house was sparkling clean, and the host was incredibly helpful. The attention to detail was noticeable in every room. It’s rare to find such a perfect blend of comfort and style in one place. I’m already planning my next visit here.`,
    rating: 2
  },
  {
    comment: `My experience here was nothing short of amazing. The host provided clear instructions and was very responsive to questions. The rooms were well-kept and smelled fresh. I particularly loved the outdoor space, which was perfect for relaxing. This place truly felt like a home away from home.`,
    rating: 5
  },
  {
    comment: `A delightful stay that surpassed our expectations. The accommodation was even better than described, and the setting was serene. We enjoyed morning coffee on the porch and spent our evenings exploring the nearby attractions. I’ve stayed at many rentals, and this is easily among the best. Will revisit soon.`,
    rating: 3
  },
  {
    comment: `Our stay at this property was absolutely wonderful. The host was very kind and accommodating, and the location was perfect. We enjoyed every moment, from the cozy rooms to the scenic views. I would definitely recommend this place to anyone looking for a peaceful and rejuvenating getaway. Worth every penny spent here.`,
    rating: 5
  },
  {
    comment: `I had a fantastic time at this location. The room was clean, well-decorated, and had everything we needed. The surroundings were calm and peaceful, which made for a relaxing vacation. The staff were helpful and quick to respond. I would come back without a doubt and recommend it to all my friends.`,
    rating: 4
  },
  {
    comment: `This place exceeded all our expectations. The photos online do not do justice to how beautiful the place really is. We were greeted warmly and had a seamless check-in process. Everything from the bed to the bathroom was spotlessly clean. It's a perfect retreat for couples or solo travelers. Highly recommended.`,
    rating: 4
  },
  {
    comment: `If you're looking for a perfect escape, this is the place to be. The location was just far enough from the city to be quiet, but close enough for convenience. The ambiance, décor, and hospitality made us feel right at home. I'd definitely give this property a five-star rating for sure.`,
    rating: 5
  },
  {
    comment: `From the moment we arrived, we felt welcomed and comfortable. The amenities were top-notch and the attention to detail was impressive. It felt like every little need had already been thought of. We truly appreciated the peaceful surroundings and would love to return again in the near future. A gem of a place.`,
    rating: 5
  },
  {
    comment: `I was blown away by how well-maintained and beautiful the property was. Every corner of the house was thoughtfully designed. It had such a cozy and warm vibe that we didn’t want to leave. The natural light, comfortable furniture, and charming surroundings made this one of my best stays ever.`,
    rating: 5
  },
  {
    comment: `Our vacation was made memorable by staying at this beautiful property. It was clean, spacious, and very tastefully decorated. The environment was tranquil and relaxing, just what we needed for a break. The host went above and beyond to make sure everything was perfect. I highly recommend staying here.`,
    rating: 5
  },
  {
    comment: `Absolutely stunning property with breathtaking views. The house was sparkling clean, and the host was incredibly helpful. The attention to detail was noticeable in every room. It’s rare to find such a perfect blend of comfort and style in one place. I’m already planning my next visit here.`,
    rating: 5
  },
  {
    comment: `My experience here was nothing short of amazing. The host provided clear instructions and was very responsive to questions. The rooms were well-kept and smelled fresh. I particularly loved the outdoor space, which was perfect for relaxing. This place truly felt like a home away from home.`,
    rating: 4
  },
  {
    comment: `A delightful stay that surpassed our expectations. The accommodation was even better than described, and the setting was serene. We enjoyed morning coffee on the porch and spent our evenings exploring the nearby attractions. I’ve stayed at many rentals, and this is easily among the best. Will revisit soon.`,
    rating: 3
  },
  {
    comment: `Our stay at this property was absolutely wonderful. The host was very kind and accommodating, and the location was perfect. We enjoyed every moment, from the cozy rooms to the scenic views. I would definitely recommend this place to anyone looking for a peaceful and rejuvenating getaway. Worth every penny spent here.`,
    rating: 3
  },
  {
    comment: `I had a fantastic time at this location. The room was clean, well-decorated, and had everything we needed. The surroundings were calm and peaceful, which made for a relaxing vacation. The staff were helpful and quick to respond. I would come back without a doubt and recommend it to all my friends.`,
    rating: 4
  },
  {
    comment: `This place exceeded all our expectations. The photos online do not do justice to how beautiful the place really is. We were greeted warmly and had a seamless check-in process. Everything from the bed to the bathroom was spotlessly clean. It's a perfect retreat for couples or solo travelers. Highly recommended.`,
    rating: 4
  },
  {
    comment: `If you're looking for a perfect escape, this is the place to be. The location was just far enough from the city to be quiet, but close enough for convenience. The ambiance, décor, and hospitality made us feel right at home. I'd definitely give this property a five-star rating for sure.`,
    rating: 3
  },
  {
    comment: `From the moment we arrived, we felt welcomed and comfortable. The amenities were top-notch and the attention to detail was impressive. It felt like every little need had already been thought of. We truly appreciated the peaceful surroundings and would love to return again in the near future. A gem of a place.`,
    rating: 4
  },
  {
    comment: `I was blown away by how well-maintained and beautiful the property was. Every corner of the house was thoughtfully designed. It had such a cozy and warm vibe that we didn’t want to leave. The natural light, comfortable furniture, and charming surroundings made this one of my best stays ever.`,
    rating: 3
  },
  {
    comment: `Our vacation was made memorable by staying at this beautiful property. It was clean, spacious, and very tastefully decorated. The environment was tranquil and relaxing, just what we needed for a break. The host went above and beyond to make sure everything was perfect. I highly recommend staying here.`,
    rating: 2
  },
  {
    comment: `Absolutely stunning property with breathtaking views. The house was sparkling clean, and the host was incredibly helpful. The attention to detail was noticeable in every room. It’s rare to find such a perfect blend of comfort and style in one place. I’m already planning my next visit here.`,
    rating: 2
  },
  {
    comment: `My experience here was nothing short of amazing. The host provided clear instructions and was very responsive to questions. The rooms were well-kept and smelled fresh. I particularly loved the outdoor space, which was perfect for relaxing. This place truly felt like a home away from home.`,
    rating: 3
  },
  {
    comment: `A delightful stay that surpassed our expectations. The accommodation was even better than described, and the setting was serene. We enjoyed morning coffee on the porch and spent our evenings exploring the nearby attractions. I’ve stayed at many rentals, and this is easily among the best. Will revisit soon.`,
    rating: 2
  },
  {
    comment: `Our stay at this property was absolutely wonderful. The host was very kind and accommodating, and the location was perfect. We enjoyed every moment, from the cozy rooms to the scenic views. I would definitely recommend this place to anyone looking for a peaceful and rejuvenating getaway. Worth every penny spent here.`,
    rating: 1
  },
  {
    comment: `I had a fantastic time at this location. The room was clean, well-decorated, and had everything we needed. The surroundings were calm and peaceful, which made for a relaxing vacation. The staff were helpful and quick to respond. I would come back without a doubt and recommend it to all my friends.`,
    rating: 5
  },
  {
    comment: `This place exceeded all our expectations. The photos online do not do justice to how beautiful the place really is. We were greeted warmly and had a seamless check-in process. Everything from the bed to the bathroom was spotlessly clean. It's a perfect retreat for couples or solo travelers. Highly recommended.`,
    rating: 4
  },
  {
    comment: `If you're looking for a perfect escape, this is the place to be. The location was just far enough from the city to be quiet, but close enough for convenience. The ambiance, décor, and hospitality made us feel right at home. I'd definitely give this property a five-star rating for sure.`,
    rating: 4
  },
  {
    comment: `From the moment we arrived, we felt welcomed and comfortable. The amenities were top-notch and the attention to detail was impressive. It felt like every little need had already been thought of. We truly appreciated the peaceful surroundings and would love to return again in the near future. A gem of a place.`,
    rating: 5
  },
  {
    comment: `I was blown away by how well-maintained and beautiful the property was. Every corner of the house was thoughtfully designed. It had such a cozy and warm vibe that we didn’t want to leave. The natural light, comfortable furniture, and charming surroundings made this one of my best stays ever.`,
    rating: 3
  },
  {
    comment: `Our vacation was made memorable by staying at this beautiful property. It was clean, spacious, and very tastefully decorated. The environment was tranquil and relaxing, just what we needed for a break. The host went above and beyond to make sure everything was perfect. I highly recommend staying here.`,
    rating: 1
  },
  {
    comment: `Absolutely stunning property with breathtaking views. The house was sparkling clean, and the host was incredibly helpful. The attention to detail was noticeable in every room. It’s rare to find such a perfect blend of comfort and style in one place. I’m already planning my next visit here.`,
    rating: 5
  },
  {
    comment: `My experience here was nothing short of amazing. The host provided clear instructions and was very responsive to questions. The rooms were well-kept and smelled fresh. I particularly loved the outdoor space, which was perfect for relaxing. This place truly felt like a home away from home.`,
    rating: 4
  },
  {
    comment: `A delightful stay that surpassed our expectations. The accommodation was even better than described, and the setting was serene. We enjoyed morning coffee on the porch and spent our evenings exploring the nearby attractions. I’ve stayed at many rentals, and this is easily among the best. Will revisit soon.`,
    rating: 3
  },
  {
    comment: `Our stay at this property was absolutely wonderful. The host was very kind and accommodating, and the location was perfect. We enjoyed every moment, from the cozy rooms to the scenic views. I would definitely recommend this place to anyone looking for a peaceful and rejuvenating getaway. Worth every penny spent here.`,
    rating: 4
  },
  {
    comment: `I had a fantastic time at this location. The room was clean, well-decorated, and had everything we needed. The surroundings were calm and peaceful, which made for a relaxing vacation. The staff were helpful and quick to respond. I would come back without a doubt and recommend it to all my friends.`,
    rating: 1
  },
  {
    comment: `This place exceeded all our expectations. The photos online do not do justice to how beautiful the place really is. We were greeted warmly and had a seamless check-in process. Everything from the bed to the bathroom was spotlessly clean. It's a perfect retreat for couples or solo travelers. Highly recommended.`,
    rating: 2
  },
  {
    comment: `If you're looking for a perfect escape, this is the place to be. The location was just far enough from the city to be quiet, but close enough for convenience. The ambiance, décor, and hospitality made us feel right at home. I'd definitely give this property a five-star rating for sure.`,
    rating: 1
  },
  {
    comment: `From the moment we arrived, we felt welcomed and comfortable. The amenities were top-notch and the attention to detail was impressive. It felt like every little need had already been thought of. We truly appreciated the peaceful surroundings and would love to return again in the near future. A gem of a place.`,
    rating: 1
  },
  {
    comment: `I was blown away by how well-maintained and beautiful the property was. Every corner of the house was thoughtfully designed. It had such a cozy and warm vibe that we didn’t want to leave. The natural light, comfortable furniture, and charming surroundings made this one of my best stays ever.`,
    rating: 2
  },
  {
    comment: `Our vacation was made memorable by staying at this beautiful property. It was clean, spacious, and very tastefully decorated. The environment was tranquil and relaxing, just what we needed for a break. The host went above and beyond to make sure everything was perfect. I highly recommend staying here.`,
    rating: 1
  },
  {
    comment: `Absolutely stunning property with breathtaking views. The house was sparkling clean, and the host was incredibly helpful. The attention to detail was noticeable in every room. It’s rare to find such a perfect blend of comfort and style in one place. I’m already planning my next visit here.`,
    rating: 5
  },
  {
    comment: `My experience here was nothing short of amazing. The host provided clear instructions and was very responsive to questions. The rooms were well-kept and smelled fresh. I particularly loved the outdoor space, which was perfect for relaxing. This place truly felt like a home away from home.`,
    rating: 5
  },
  {
    comment: `A delightful stay that surpassed our expectations. The accommodation was even better than described, and the setting was serene. We enjoyed morning coffee on the porch and spent our evenings exploring the nearby attractions. I’ve stayed at many rentals, and this is easily among the best. Will revisit soon.`,
    rating: 5
  },
  {
    comment: `Our stay at this property was absolutely wonderful. The host was very kind and accommodating, and the location was perfect. We enjoyed every moment, from the cozy rooms to the scenic views. I would definitely recommend this place to anyone looking for a peaceful and rejuvenating getaway. Worth every penny spent here.`,
    rating: 5
  },
  {
    comment: `I had a fantastic time at this location. The room was clean, well-decorated, and had everything we needed. The surroundings were calm and peaceful, which made for a relaxing vacation. The staff were helpful and quick to respond. I would come back without a doubt and recommend it to all my friends.`,
    rating: 5
  },
  {
    comment: `This place exceeded all our expectations. The photos online do not do justice to how beautiful the place really is. We were greeted warmly and had a seamless check-in process. Everything from the bed to the bathroom was spotlessly clean. It's a perfect retreat for couples or solo travelers. Highly recommended.`,
    rating: 5
  },
  {
    comment: `If you're looking for a perfect escape, this is the place to be. The location was just far enough from the city to be quiet, but close enough for convenience. The ambiance, décor, and hospitality made us feel right at home. I'd definitely give this property a five-star rating for sure.`,
    rating: 3
  },
  {
    comment: `From the moment we arrived, we felt welcomed and comfortable. The amenities were top-notch and the attention to detail was impressive. It felt like every little need had already been thought of. We truly appreciated the peaceful surroundings and would love to return again in the near future. A gem of a place.`,
    rating: 4
  },
  {
    comment: `I was blown away by how well-maintained and beautiful the property was. Every corner of the house was thoughtfully designed. It had such a cozy and warm vibe that we didn’t want to leave. The natural light, comfortable furniture, and charming surroundings made this one of my best stays ever.`,
    rating: 1
  },
  {
    comment: `Our vacation was made memorable by staying at this beautiful property. It was clean, spacious, and very tastefully decorated. The environment was tranquil and relaxing, just what we needed for a break. The host went above and beyond to make sure everything was perfect. I highly recommend staying here.`,
    rating: 3
  },
  {
    comment: `Absolutely stunning property with breathtaking views. The house was sparkling clean, and the host was incredibly helpful. The attention to detail was noticeable in every room. It’s rare to find such a perfect blend of comfort and style in one place. I’m already planning my next visit here.`,
    rating: 4
  },
  {
    comment: `My experience here was nothing short of amazing. The host provided clear instructions and was very responsive to questions. The rooms were well-kept and smelled fresh. I particularly loved the outdoor space, which was perfect for relaxing. This place truly felt like a home away from home.`,
    rating: 5
  },
  {
    comment: `A delightful stay that surpassed our expectations. The accommodation was even better than described, and the setting was serene. We enjoyed morning coffee on the porch and spent our evenings exploring the nearby attractions. I’ve stayed at many rentals, and this is easily among the best. Will revisit soon.`,
    rating: 4
  },
  {
    comment: `Our stay at this property was absolutely wonderful. The host was very kind and accommodating, and the location was perfect. We enjoyed every moment, from the cozy rooms to the scenic views. I would definitely recommend this place to anyone looking for a peaceful and rejuvenating getaway. Worth every penny spent here.`,
    rating: 2
  },
  {
    comment: `I had a fantastic time at this location. The room was clean, well-decorated, and had everything we needed. The surroundings were calm and peaceful, which made for a relaxing vacation. The staff were helpful and quick to respond. I would come back without a doubt and recommend it to all my friends.`,
    rating: 4
  },
  {
    comment: `This place exceeded all our expectations. The photos online do not do justice to how beautiful the place really is. We were greeted warmly and had a seamless check-in process. Everything from the bed to the bathroom was spotlessly clean. It's a perfect retreat for couples or solo travelers. Highly recommended.`,
    rating: 2
  },
  {
    comment: `If you're looking for a perfect escape, this is the place to be. The location was just far enough from the city to be quiet, but close enough for convenience. The ambiance, décor, and hospitality made us feel right at home. I'd definitely give this property a five-star rating for sure.`,
    rating: 1
  },
  {
    comment: `From the moment we arrived, we felt welcomed and comfortable. The amenities were top-notch and the attention to detail was impressive. It felt like every little need had already been thought of. We truly appreciated the peaceful surroundings and would love to return again in the near future. A gem of a place.`,
    rating: 5
  },
  {
    comment: `I was blown away by how well-maintained and beautiful the property was. Every corner of the house was thoughtfully designed. It had such a cozy and warm vibe that we didn’t want to leave. The natural light, comfortable furniture, and charming surroundings made this one of my best stays ever.`,
    rating: 4
  },
  {
    comment: `Our vacation was made memorable by staying at this beautiful property. It was clean, spacious, and very tastefully decorated. The environment was tranquil and relaxing, just what we needed for a break. The host went above and beyond to make sure everything was perfect. I highly recommend staying here.`,
    rating: 3
  },
  {
    comment: `Absolutely stunning property with breathtaking views. The house was sparkling clean, and the host was incredibly helpful. The attention to detail was noticeable in every room. It’s rare to find such a perfect blend of comfort and style in one place. I’m already planning my next visit here.`,
    rating: 4
  },
  {
    comment: `My experience here was nothing short of amazing. The host provided clear instructions and was very responsive to questions. The rooms were well-kept and smelled fresh. I particularly loved the outdoor space, which was perfect for relaxing. This place truly felt like a home away from home.`,
    rating: 5
  },
  {
    comment: `A delightful stay that surpassed our expectations. The accommodation was even better than described, and the setting was serene. We enjoyed morning coffee on the porch and spent our evenings exploring the nearby attractions. I’ve stayed at many rentals, and this is easily among the best. Will revisit soon.`,
    rating: 4
  },
  {
    comment: `Our stay at this property was absolutely wonderful. The host was very kind and accommodating, and the location was perfect. We enjoyed every moment, from the cozy rooms to the scenic views. I would definitely recommend this place to anyone looking for a peaceful and rejuvenating getaway. Worth every penny spent here.`,
    rating: 2
  },
  {
    comment: `I had a fantastic time at this location. The room was clean, well-decorated, and had everything we needed. The surroundings were calm and peaceful, which made for a relaxing vacation. The staff were helpful and quick to respond. I would come back without a doubt and recommend it to all my friends.`,
    rating: 5
  },
  {
    comment: `This place exceeded all our expectations. The photos online do not do justice to how beautiful the place really is. We were greeted warmly and had a seamless check-in process. Everything from the bed to the bathroom was spotlessly clean. It's a perfect retreat for couples or solo travelers. Highly recommended.`,
    rating: 4
  },
  {
    comment: `If you're looking for a perfect escape, this is the place to be. The location was just far enough from the city to be quiet, but close enough for convenience. The ambiance, décor, and hospitality made us feel right at home. I'd definitely give this property a five-star rating for sure.`,
    rating: 2
  },
  {
    comment: `From the moment we arrived, we felt welcomed and comfortable. The amenities were top-notch and the attention to detail was impressive. It felt like every little need had already been thought of. We truly appreciated the peaceful surroundings and would love to return again in the near future. A gem of a place.`,
    rating: 3
  },
  {
    comment: `I was blown away by how well-maintained and beautiful the property was. Every corner of the house was thoughtfully designed. It had such a cozy and warm vibe that we didn’t want to leave. The natural light, comfortable furniture, and charming surroundings made this one of my best stays ever.`,
    rating: 4
  },
  {
    comment: `Our vacation was made memorable by staying at this beautiful property. It was clean, spacious, and very tastefully decorated. The environment was tranquil and relaxing, just what we needed for a break. The host went above and beyond to make sure everything was perfect. I highly recommend staying here.`,
    rating: 2
  },
  {
    comment: `Absolutely stunning property with breathtaking views. The house was sparkling clean, and the host was incredibly helpful. The attention to detail was noticeable in every room. It’s rare to find such a perfect blend of comfort and style in one place. I’m already planning my next visit here.`,
    rating: 1
  },
  {
    comment: `My experience here was nothing short of amazing. The host provided clear instructions and was very responsive to questions. The rooms were well-kept and smelled fresh. I particularly loved the outdoor space, which was perfect for relaxing. This place truly felt like a home away from home.`,
    rating: 1
  },
  {
    comment: `A delightful stay that surpassed our expectations. The accommodation was even better than described, and the setting was serene. We enjoyed morning coffee on the porch and spent our evenings exploring the nearby attractions. I’ve stayed at many rentals, and this is easily among the best. Will revisit soon.`,
    rating: 5
  },
  {
    comment: `Our stay at this property was absolutely wonderful. The host was very kind and accommodating, and the location was perfect. We enjoyed every moment, from the cozy rooms to the scenic views. I would definitely recommend this place to anyone looking for a peaceful and rejuvenating getaway. Worth every penny spent here.`,
    rating: 1
  },
  {
    comment: `I had a fantastic time at this location. The room was clean, well-decorated, and had everything we needed. The surroundings were calm and peaceful, which made for a relaxing vacation. The staff were helpful and quick to respond. I would come back without a doubt and recommend it to all my friends.`,
    rating: 5
  },
  {
    comment: `This place exceeded all our expectations. The photos online do not do justice to how beautiful the place really is. We were greeted warmly and had a seamless check-in process. Everything from the bed to the bathroom was spotlessly clean. It's a perfect retreat for couples or solo travelers. Highly recommended.`,
    rating: 3
  },
  {
    comment: `If you're looking for a perfect escape, this is the place to be. The location was just far enough from the city to be quiet, but close enough for convenience. The ambiance, décor, and hospitality made us feel right at home. I'd definitely give this property a five-star rating for sure.`,
    rating: 2
  },
  {
    comment: `From the moment we arrived, we felt welcomed and comfortable. The amenities were top-notch and the attention to detail was impressive. It felt like every little need had already been thought of. We truly appreciated the peaceful surroundings and would love to return again in the near future. A gem of a place.`,
    rating: 3
  },
  {
    comment: `I was blown away by how well-maintained and beautiful the property was. Every corner of the house was thoughtfully designed. It had such a cozy and warm vibe that we didn’t want to leave. The natural light, comfortable furniture, and charming surroundings made this one of my best stays ever.`,
    rating: 2
  },
  {
    comment: `Our vacation was made memorable by staying at this beautiful property. It was clean, spacious, and very tastefully decorated. The environment was tranquil and relaxing, just what we needed for a break. The host went above and beyond to make sure everything was perfect. I highly recommend staying here.`,
    rating: 2
  },
  {
    comment: `Absolutely stunning property with breathtaking views. The house was sparkling clean, and the host was incredibly helpful. The attention to detail was noticeable in every room. It’s rare to find such a perfect blend of comfort and style in one place. I’m already planning my next visit here.`,
    rating: 4
  },
  {
    comment: `My experience here was nothing short of amazing. The host provided clear instructions and was very responsive to questions. The rooms were well-kept and smelled fresh. I particularly loved the outdoor space, which was perfect for relaxing. This place truly felt like a home away from home.`,
    rating: 2
  },
  {
    comment: `A delightful stay that surpassed our expectations. The accommodation was even better than described, and the setting was serene. We enjoyed morning coffee on the porch and spent our evenings exploring the nearby attractions. I’ve stayed at many rentals, and this is easily among the best. Will revisit soon.`,
    rating: 5
  },
  {
    comment: `Our stay at this property was absolutely wonderful. The host was very kind and accommodating, and the location was perfect. We enjoyed every moment, from the cozy rooms to the scenic views. I would definitely recommend this place to anyone looking for a peaceful and rejuvenating getaway. Worth every penny spent here.`,
    rating: 3
  },
  {
    comment: `I had a fantastic time at this location. The room was clean, well-decorated, and had everything we needed. The surroundings were calm and peaceful, which made for a relaxing vacation. The staff were helpful and quick to respond. I would come back without a doubt and recommend it to all my friends.`,
    rating: 3
  },
  {
    comment: `This place exceeded all our expectations. The photos online do not do justice to how beautiful the place really is. We were greeted warmly and had a seamless check-in process. Everything from the bed to the bathroom was spotlessly clean. It's a perfect retreat for couples or solo travelers. Highly recommended.`,
    rating: 5
  },
  {
    comment: `If you're looking for a perfect escape, this is the place to be. The location was just far enough from the city to be quiet, but close enough for convenience. The ambiance, décor, and hospitality made us feel right at home. I'd definitely give this property a five-star rating for sure.`,
    rating: 2
  },
  {
    comment: `From the moment we arrived, we felt welcomed and comfortable. The amenities were top-notch and the attention to detail was impressive. It felt like every little need had already been thought of. We truly appreciated the peaceful surroundings and would love to return again in the near future. A gem of a place.`,
    rating: 1
  },
  {
    comment: `I was blown away by how well-maintained and beautiful the property was. Every corner of the house was thoughtfully designed. It had such a cozy and warm vibe that we didn’t want to leave. The natural light, comfortable furniture, and charming surroundings made this one of my best stays ever.`,
    rating: 3
  },
  {
    comment: `Our vacation was made memorable by staying at this beautiful property. It was clean, spacious, and very tastefully decorated. The environment was tranquil and relaxing, just what we needed for a break. The host went above and beyond to make sure everything was perfect. I highly recommend staying here.`,
    rating: 5
  },
  {
    comment: `Absolutely stunning property with breathtaking views. The house was sparkling clean, and the host was incredibly helpful. The attention to detail was noticeable in every room. It’s rare to find such a perfect blend of comfort and style in one place. I’m already planning my next visit here.`,
    rating: 5
  },
  {
    comment: `My experience here was nothing short of amazing. The host provided clear instructions and was very responsive to questions. The rooms were well-kept and smelled fresh. I particularly loved the outdoor space, which was perfect for relaxing. This place truly felt like a home away from home.`,
    rating: 3
  },
  {
    comment: `A delightful stay that surpassed our expectations. The accommodation was even better than described, and the setting was serene. We enjoyed morning coffee on the porch and spent our evenings exploring the nearby attractions. I’ve stayed at many rentals, and this is easily among the best. Will revisit soon.`,
    rating: 4
  },
];

module.exports = { sampleReviews };