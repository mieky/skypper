skypper
=======

Converts an image into Skype emoticons using the HTML5 Canvas element. Because, well, it's possible.

Input: an image element with data (mario.png!)
Output: a text block with a lot of Skype emoticons

Creates a one-to-one mapping between each image pixel and the predefined colors,
so pretty much the only image that currently makes sense is mario.png.

tl;dr
-----

	(e)(e)(e)(e)(devil)(devil)(devil)(devil)(devil)(e)(e)(y)(y)(y)(e)
	(e)(e)(e)(devil)(devil)(devil)(devil)(devil)(devil)(devil)(devil)(devil)(y)(y)(e)
	(e)(e)(e)(hug)(hug)(hug)(y)(y)(emo)(y)(devil)(devil)(devil)(devil)(e)
	(e)(e)(hug)(y)(hug)(y)(y)(y)(emo)(y)(y)(y)(devil)(devil)(e)
	(e)(e)(hug)(y)(hug)(hug)(y)(y)(y)(emo)(y)(y)(y)(e)(e)
	(e)(e)(hug)(hug)(y)(y)(y)(y)(emo)(emo)(emo)(emo)(devil)(e)(e)
	(e)(e)(e)(y)(y)(y)(y)(y)(y)(y)(y)(devil)(devil)(e)(e)
	(e)(devil)(devil)(devil)(devil)(skype)(devil)(devil)(devil)(skype)(devil)(devil)(e)(e)(hug)
	(e)(devil)(devil)(devil)(devil)(devil)(skype)(devil)(devil)(devil)(skype)(e)(e)(hug)(hug)
	(e)(e)(devil)(devil)(devil)(devil)(skype)(skype)(skype)(skype)(sun)(skype)(skype)(hug)(hug)
	(e)(e)(e)(skype)(skype)(skype)(skype)(sun)(skype)(skype)(skype)(skype)(skype)(hug)(hug)
	(e)(hug)(hug)(skype)(skype)(skype)(skype)(skype)(skype)(e)(e)(e)(e)(e)(e)
	(hug)(hug)(hug)(e)(e)(e)(e)(e)(e)(e)(e)(e)(e)(e)(e)
	(hug)(hug)(e)(e)(e)(e)(e)(e)(e)(e)(e)(e)(e)(e)(e)
