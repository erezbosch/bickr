# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
Wordnik.configure do |config|
    config.api_key = 'b8426bd719b21e632c566529d040a11ff5be1c172b48fd839'
end

photos = [
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440141004/Hamilton-burr-duel_k94pso.jpg',
		public_id: 'Hamilton-burr-duel_k94pso',
		title: 'Hamilton & Burr',
		caption: 'These two lads didn\'t get along very well.'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440141510/maxresdefault_kvd5h0.jpg',
		public_id: 'maxresdefault_kvd5h0',
		title: 'Black Knight',
		caption: 'You have to respect a guy who never gives up.'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440141708/frost_nixon04_jozuyv.jpg',
		public_id: 'frost_nixon04_jozuyv',
		title: 'Frost/Nixon'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440141899/Lukevaderesb_yimlc3.png',
		public_id: 'Lukevaderesb_yimlc3',
		title: 'Star Wars',
		caption: 'Unhealthy father/son relationship'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440142014/obi-wan-versus-vader_en78dl.jpg',
		public_id: 'obi-wan-versus-vader_en78dl',
		title: 'Star Wars Again',
		caption: 'Unhealthy mentor/protege relationship'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440142228/Mocking_Bird_Argument_bwrp6j.jpg',
		public_id: 'Mocking_Bird_Argument_bwrp6j',
		title: 'Mockingbirds',
		caption: 'I kept telling this guy but he would NOT look where I was pointing. Frustrating!!'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440142390/8055192860_5782ec556e_o_hvhs6z.jpg',
		public_id: '8055192860_5782ec556e_o_hvhs6z',
		title: 'Cat',
		caption: 'Dude looks ridiculous. Take off that shirt if you want to be taken seriously.'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440142555/200049988_c786b274fd_o_wbtuho.jpg',
		public_id: '200049988_c786b274fd_o_wbtuho',
		title: 'Penguin',
		caption: 'No, I won\'t "chill". We live in freaking Antarctica!'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440142768/HarpersMagazineSicklesTrial_mkqyz3.jpg',
		public_id: 'HarpersMagazineSicklesTrial_mkqyz3',
		title: 'Mustaches',
		caption: 'These guys were mainly just arguing over whose mustache was the best.'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440142942/Sanzio_01_Plato_Aristotle_w6d4cy.jpg',
		public_id: 'Sanzio_01_Plato_Aristotle_w6d4cy',
		title: 'No, THIS is how you\'re meant to wear a toga.'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440143145/6271012841_5ac8f4beb3_o_byce0t.jpg',
		public_id: '6271012841_5ac8f4beb3_o_byce0t',
		title: 'Two Lego men enter...',
		caption: 'Neither of them leave because they were both eaten by a cardboard robot'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440143540/Water_Buffalo_fight_vmv1cz.jpg',
		public_id: 'Water_Buffalo_fight_vmv1cz',
		title: 'Butting Heads Literally HAHAHAHAHAHA I\'m sure that is the funniest thing ever',
		caption: 'Buffalo'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440144077/2000px-Graham_s_Hierarchy_of_Disagreement-en.svg_i9milo.png',
		public_id: '2000px-Graham_s_Hierarchy_of_Disagreement-en.svg_i9milo',
		title: 'Pyramid',
		caption: 'The classical pyramid of argumentation which we all aspire to one day climb'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440143800/Do_not_take_his_bone_ohvebe.jpg',
		public_id: 'Do_not_take_his_bone_ohvebe',
		title: 'Dog Refuses To Surrender His Bone Despite My Many Well-Reasoned Arguments'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440143892/Dung-beetles-feeding-on-dung_codtyg.jpg',
		public_id: 'Dung-beetles-feeding-on-dung_codtyg',
		title: 'Obstinate Beetle',
		caption: 'Couldn\'t even tell me what was so great about dung, but he said he had been rolling it too far to stop now. Uh, have you even HEARD OF THE EM EFFING SUNK COST FALLACY IDIOT????'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440144270/Thanksgiving_1918_f7usk1.jpg',
		public_id: 'Thanksgiving_1918_f7usk1',
		title: 'Look who loves eating meat off of a bone',
		caption: 'These two guys, you might be saying. Well don\'t say that around me because I AM THE ONE WHO TRULY LOVES EATING MEAT OFF OF A BONE, AS I TOLD THEM IN NO UNCERTAIN TERMS, YOU PLEBEIAN MEAT-BONE-MORON.'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440144677/Slavoj_Zizek_in_Liverpool_2_o40kxa.jpg',
		public_id: 'Slavoj_Zizek_in_Liverpool_2_o40kxa',
		title: 'Confusing Man',
		caption: 'This guy seemed to just be arguing with himself, ignoring my active participation in a passive-aggressive dialogue with him'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440144791/Carl_Schleicher_J_C3_BCdische_Szene_2_vkakem.jpg',
		public_id: 'Carl_Schleicher_J_C3_BCdische_Szene_2_vkakem',
		title: 'Furry Hat Men',
		caption: 'Get four furry hat men in a room with a furless hat man and they will turn on him faster than a greased lightning pig (?) which is what they did just after I snapped this pic.'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440145036/John_F._Kerry_y5gx2p.jpg',
		public_id: 'John_F._Kerry_y5gx2p',
		title: 'Politics',
		caption: 'Hey remember when this guy wasn\'t elected because he had changed his mind about some things (like he was arguing with himself) and then instead we got 4 more years of arguably the greatest president this country, or perhaps any country, has ever had?'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440145206/Monstre-img_0573_kpu9hw.jpg',
		public_id: 'Monstre-img_0573_kpu9hw',
		title: 'Bickering Heads',
		caption: '"You\'re the weird mutant 2nd head!" "No you are!" ... these two would not shut up.'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440145388/Isaac_Newton__English_School__1715-20_vcntp7.jpg',
		public_id: 'Isaac_Newton__English_School__1715-20_vcntp7',
		title: 'I get that you invented gravity or whatever but...',
		caption: 'You cannot come at me saying things like "my hair looks better than yours". IT IS A FREAKING DIRTY MOP. LITERALLY A MOP. STFU ISAAC NEWTON'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440145544/Hippo_fight_vd3n2e.jpg',
		public_id: 'Hippo_fight_vd3n2e',
		title: 'Some disagreements are more civilized than others...'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440145682/362998037_99b69f575c_o_jnuom7.jpg',
		public_id: '362998037_99b69f575c_o_jnuom7',
		title: 'Famous Fight'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440145857/2488569092_97e09e7c33_o_tyobak.jpg',
		public_id: 'v1440145857/2488569092_97e09e7c33_o_tyobak',
		title: 'Boy I really got this guy good',
		caption: 'That\'s right... I, the uploader of this photograph, am none other than Secretly King Midas!!! Another sucker turned to gold!!!'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440146953/6188161073_471d5f5f20_b_x2pgfb.jpg',
		public_id: '6188161073_471d5f5f20_b_x2pgfb',
		title: 'Fear My Wrath-Stick'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440146063/angry-165018_1280_q6qyvn.jpg',
		public_id: 'angry-165018_1280_q6qyvn',
		title: 'Seals',
		caption: '"My environment has been more damaged by overfishing and oil spills!" "No, mine has!" ... these two would NOT shut up.'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440146215/5256684047_1d83ac2fdf_o_kjitrh.jpg',
		public_id: '5256684047_1d83ac2fdf_o_kjitrh',
		title: 'Bears',
		caption: 'The guy on the left definitely wins the fight over whose fur looks better in the sunlight.'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440146954/274772994_5cc66c38c6_o_chiyld.jpg',
		public_id: '274772994_5cc66c38c6_o_chiyld',
		title: 'Toe Fight - The Grisly Conclusion'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440146960/16034369166_f88a445845_k_ncbqpj.jpg',
		public_id: '16034369166_f88a445845_k_ncbqpj',
		title: 'Yes, I am uglier and I will prove it if I have to look at you looking at me for however long it takes you to accept this.'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440146958/7864525518_cb568e55ca_k_dd0e9a.jpg',
		public_id: '7864525518_cb568e55ca_k_dd0e9a',
		title: 'Insufferable Artist',
		caption: 'No I won\'t look at your "great drawing of a person\'s head." IF YOU DIDN\'T NOTICE MY FREAKING EYES JUST FLAKED OFF. I\'M A COLLAPSING MOSAIC PERSON. I DON\'T HAVE TIME FOR YOUR ART.'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440148827/16326231608_38e88464ea_k_ptnmls.jpg',
		public_id: '16326231608_38e88464ea_k_ptnmls',
		title: 'Don\'t look at me like that or I shall be forced to explain the myriad reasons why I am on the paleo diet in excruciating detail'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440148825/2540979069_4b40c9c241_b_nnwoku.jpg',
		public_id: '2540979069_4b40c9c241_b_nnwoku',
		title: 'Fake Fight'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440148849/10797140136_36522c057f_k_bwhlvh.jpg',
		public_id: '10797140136_36522c057f_k_bwhlvh',
		title: 'I felt like a real 3rd wheel while those two were going at it'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440170375/snowman_with_christmas_decor_by_teamhawksskyfighters-d4en7by_kg9jln.jpg',
		public_id: 'snowman_with_christmas_decor_by_teamhawksskyfighters-d4en7by_kg9jln',
		title: 'If you argue with Time there is only one winner'
	},
	{
		image_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440170467/Warsaw_Pillow_Fight_2010__4487959761_b9miki.jpg',
		public_id: 'Warsaw_Pillow_Fight_2010__4487959761_b9miki',
		title: 'Violent Youths'
	},
] # Goal: 100 x { image_url: , public_id: , title: , caption: [leave this off for some] }

terms = [
	'argument',
	'fight',
	'conflict',
	'opposition',
	'disagreement',
]
types = ['synonym', 'hypernym', 'hyponym', 'cross-reference']

words = []
terms.each do |term|
	types.each do |type|
		words.concat(
			Wordnik.word.get_related(term, type: type, limit: 25).first['words']
		)
	end
end
words.reject! { |word| ['reverse', 'row', 'reset'].include?(word) }.uniq!

sentences = words.each_with_object([]) do |term, ary|
	examples = Wordnik.word.get_examples(term)['examples']
	ary.concat(examples.map { |example| example['text'] }) if examples
end

albums = Array.new(10) do
	title = Array.new(rand(5) + 1) { words.sample }
	title = title.map { |word| word.split(' ').map(&:capitalize) }
							 .flatten.join(' ')
	description = Array.new(rand(3) + 1) { sentences.sample }.join(' ')
  { title: title, description: description }
end

avatars = [
  'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440089963/rhf52skfmx94r6jwo8qi.png',
  'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1439944477/gaulcveo3rlmszca2pof.jpg',
  'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1439853846/xbdqzxz9fxpugvcipbck.jpg',
  'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440173888/Astronotus_ocellatus_-_closeup__aka_jwy14g.jpg',
  'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440173911/Snail_0075_prbzxc.jpg',
  'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440173926/Toddy_Dog_bunvkt.jpg',
  'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440173940/Elephant__Loxodonta_Africana__04_fkmv3v.jpg',
  'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440174588/eagle-eye-katie-abrams_ds5q6m.jpg'
]

tags = Array.new(25) do
  tag = nil
  loop do
    tag = Tag.new(label: words.sample)
    break if tag.save
  end
  tag
end

users = Array.new(avatars.length * 1.25) do |i|
  user = nil
  loop do
    user = User.new(
      email: Faker::Internet.safe_email,
      password: 'password',
      avatar_url: i < avatars.length ? avatars[i] : nil
    )
    break if user.save
  end
  user
end
guest = User.new(
  email: 'guest@example.com',
  password: 'password',
  avatar_url: 'http://res.cloudinary.com/dbxvb3ap5/image/upload/v1440005771/gknctceka4r9zfrlbng9.jpg'
)
users << guest if guest.save

albums.map! { |album_hash| users.sample.albums.create(album_hash) }

photos.map! do |photo_hash|
  user = users.sample
  if [true, false, false].sample || user.albums.blank?
    user.photos.create(photo_hash)
  else
    user.albums.sample.photos.create(photo_hash.merge({ uploader: user }))
  end
end

comment_hashes = Array.new(250) do
  if rand() > 0.6
    body = words.sample
  else
    body = Array.new(rand(4) + 1) { sentences.sample }.join(' ')
  end
  { body: body }
end
comments = []
comment_hashes.each do |hash|
  commentable = (comments + albums * 2 + photos * 2).sample
  comment = commentable.comments.new(hash.merge({
    user_id: rand(users.length) + 1
  }))
  comments << comment if comment.save
end

albums[0...albums.length / 2].each do |album|
  album.update(cover_photo: album.photos.sample)
end

((albums + photos).length * 5).times do
  (albums + photos).sample.taggings.create(tag_id: rand(tags.length) + 1)
  (albums + photos).sample.likes.create(user_id: rand(users.length) + 1)
end

(users.length * 3).times do
  users.sample.in_follows.create(follower_id: rand(users.length - 1) + 1)
end

(users.length / 2).times do |i|
  users.last.out_follows.create(followee_id: i + 1)
end
