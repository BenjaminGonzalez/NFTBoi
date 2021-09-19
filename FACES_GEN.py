from PIL import Image
import glob
import random

background = Image.open("test1.png")
foreground = Image.open("test2.png")

background.paste(foreground, (0, 0), foreground)
background.show()

components = {
    "base": [
        {
            "hash": 0,
            "img": None
        },
    ],
    "hat": [
        {

        },
    ],
    "nose": [
        {

        },
    ],
    "eyes": [
        {

        },
    ],
    "ears": [
        {

        },
    ],
}

render_order = ["base", "eyes", "nose", "ears", "hat"]
for component_type in components.keys():
    for image_loc in list(glob.glob('Assets/'+component_type+'/*.png')):
        img = Image.open(image_loc)

nfts = []
while len(nfts) < 10:
    attributes = [random.random() for _ in range(0, len(render_order))]
    #if below an index, do nothing,
    nft_attribute = {}
    for attibute in attributes:
        #if below an index, do nothing,
        #if an index get random one of the attibutes
        nft_attribute[attibute] = None #random hash
    nfts.append(nft_attribute)

# loop through nfts array
# render in the order specified via
#background = Image.open("test1.png")
#foreground = Image.open("test2.png")
#
#background.paste(foreground, (0, 0), foreground)
#background.show()
#.save("test3.png")