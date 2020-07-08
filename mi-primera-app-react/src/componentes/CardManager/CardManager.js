import React, { useState } from 'react';
import Card from './../Card/Card';
import './CardManager.css';

const CardManager = () => {
    const [data] = useState([
        {
            "type": "gif",
            "id": "g7YDlrD5YLqfe",
            "url": "https://giphy.com/gifs/cat-animal-g7YDlrD5YLqfe",
            "slug": "cat-animal-g7YDlrD5YLqfe",
            "bitly_gif_url": "https://gph.is/1gZHm29",
            "bitly_url": "https://gph.is/1gZHm29",
            "embed_url": "https://giphy.com/embed/g7YDlrD5YLqfe",
            "username": "",
            "source": "https://www.tumblr.com",
            "title": "Cat Kitten GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "www.tumblr.com",
            "source_post_url": "https://www.tumblr.com",
            "is_sticker": 0,
            "import_datetime": "2014-02-18 09:39:59",
            "trending_datetime": "1970-01-01 00:00:00",
            "images": {
                "downsized_large": {
                    "height": "320",
                    "size": "603847",
                    "url": "https://media3.giphy.com/media/g7YDlrD5YLqfe/giphy.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.gif",
                    "width": "240"
                },
                "fixed_height_small_still": {
                    "height": "100",
                    "size": "5326",
                    "url": "https://media3.giphy.com/media/g7YDlrD5YLqfe/100_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100_s.gif",
                    "width": "75"
                },
                "original": {
                    "frames": "20",
                    "hash": "5b796a9b8cb5f74aa1b229fca8c487fc",
                    "height": "320",
                    "mp4": "https://media3.giphy.com/media/g7YDlrD5YLqfe/giphy.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.mp4",
                    "mp4_size": "580188",
                    "size": "603847",
                    "url": "https://media3.giphy.com/media/g7YDlrD5YLqfe/giphy.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.gif",
                    "webp": "https://media3.giphy.com/media/g7YDlrD5YLqfe/giphy.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.webp",
                    "webp_size": "295532",
                    "width": "240"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "size": "80743",
                    "url": "https://media3.giphy.com/media/g7YDlrD5YLqfe/200_d.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200_d.gif",
                    "webp": "https://media3.giphy.com/media/g7YDlrD5YLqfe/200_d.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200_d.webp",
                    "webp_size": "51528",
                    "width": "150"
                },
                "downsized_still": {
                    "height": "320",
                    "size": "603847",
                    "url": "https://media3.giphy.com/media/g7YDlrD5YLqfe/giphy_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy_s.gif",
                    "width": "240"
                },
                "fixed_height_still": {
                    "height": "200",
                    "size": "15351",
                    "url": "https://media3.giphy.com/media/g7YDlrD5YLqfe/200_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200_s.gif",
                    "width": "150"
                },
                "downsized_medium": {
                    "height": "320",
                    "size": "603847",
                    "url": "https://media3.giphy.com/media/g7YDlrD5YLqfe/giphy.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.gif",
                    "width": "240"
                },
                "downsized": {
                    "height": "320",
                    "size": "603847",
                    "url": "https://media3.giphy.com/media/g7YDlrD5YLqfe/giphy.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.gif",
                    "width": "240"
                },
                "preview_webp": {
                    "height": "146",
                    "size": "39706",
                    "url": "https://media3.giphy.com/media/g7YDlrD5YLqfe/giphy-preview.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-preview.webp",
                    "width": "110"
                },
                "original_mp4": {
                    "height": "640",
                    "mp4": "https://media3.giphy.com/media/g7YDlrD5YLqfe/giphy.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.mp4",
                    "mp4_size": "580188",
                    "width": "480"
                },
                "fixed_height_small": {
                    "height": "100",
                    "mp4": "https://media3.giphy.com/media/g7YDlrD5YLqfe/100.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100.mp4",
                    "mp4_size": "12578",
                    "size": "69787",
                    "url": "https://media3.giphy.com/media/g7YDlrD5YLqfe/100.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100.gif",
                    "webp": "https://media3.giphy.com/media/g7YDlrD5YLqfe/100.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100.webp",
                    "webp_size": "44870",
                    "width": "75"
                },
                "fixed_height": {
                    "height": "200",
                    "mp4": "https://media3.giphy.com/media/g7YDlrD5YLqfe/200.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200.mp4",
                    "mp4_size": "39401",
                    "size": "225187",
                    "url": "https://media3.giphy.com/media/g7YDlrD5YLqfe/200.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200.gif",
                    "webp": "https://media3.giphy.com/media/g7YDlrD5YLqfe/200.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200.webp",
                    "webp_size": "131894",
                    "width": "150"
                },
                "downsized_small": {
                    "height": "320",
                    "mp4": "https://media3.giphy.com/media/g7YDlrD5YLqfe/giphy-downsized-small.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-downsized-small.mp4",
                    "mp4_size": "146256",
                    "width": "240"
                },
                "preview": {
                    "height": "186",
                    "mp4": "https://media3.giphy.com/media/g7YDlrD5YLqfe/giphy-preview.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-preview.mp4",
                    "mp4_size": "17089",
                    "width": "139"
                },
                "fixed_width_downsampled": {
                    "height": "267",
                    "size": "140082",
                    "url": "https://media3.giphy.com/media/g7YDlrD5YLqfe/200w_d.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w_d.gif",
                    "webp": "https://media3.giphy.com/media/g7YDlrD5YLqfe/200w_d.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w_d.webp",
                    "webp_size": "80642",
                    "width": "200"
                },
                "fixed_width_small_still": {
                    "height": "134",
                    "size": "8841",
                    "url": "https://media3.giphy.com/media/g7YDlrD5YLqfe/100w_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w_s.gif",
                    "width": "100"
                },
                "fixed_width_small": {
                    "height": "134",
                    "mp4": "https://media3.giphy.com/media/g7YDlrD5YLqfe/100w.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w.mp4",
                    "mp4_size": "21038",
                    "size": "115520",
                    "url": "https://media3.giphy.com/media/g7YDlrD5YLqfe/100w.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w.gif",
                    "webp": "https://media3.giphy.com/media/g7YDlrD5YLqfe/100w.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w.webp",
                    "webp_size": "69694",
                    "width": "100"
                },
                "original_still": {
                    "height": "320",
                    "size": "59559",
                    "url": "https://media3.giphy.com/media/g7YDlrD5YLqfe/giphy_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy_s.gif",
                    "width": "240"
                },
                "fixed_width_still": {
                    "height": "267",
                    "size": "25175",
                    "url": "https://media3.giphy.com/media/g7YDlrD5YLqfe/200w_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w_s.gif",
                    "width": "200"
                },
                "looping": {
                    "mp4": "https://media3.giphy.com/media/g7YDlrD5YLqfe/giphy-loop.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-loop.mp4",
                    "mp4_size": "1338097"
                },
                "fixed_width": {
                    "height": "267",
                    "mp4": "https://media3.giphy.com/media/g7YDlrD5YLqfe/200w.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w.mp4",
                    "mp4_size": "62712",
                    "size": "383924",
                    "url": "https://media3.giphy.com/media/g7YDlrD5YLqfe/200w.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w.gif",
                    "webp": "https://media3.giphy.com/media/g7YDlrD5YLqfe/200w.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w.webp",
                    "webp_size": "201080",
                    "width": "200"
                },
                "preview_gif": {
                    "height": "100",
                    "size": "49057",
                    "url": "https://media3.giphy.com/media/g7YDlrD5YLqfe/giphy-preview.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-preview.gif",
                    "width": "75"
                },
                "480w_still": {
                    "url": "https://media0.giphy.com/media/g7YDlrD5YLqfe/480w_s.jpg?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=480w_s.jpg",
                    "width": "480",
                    "height": "640"
                }
            },
            "analytics_response_payload": "e=Z2lmX2lkPWc3WURsckQ1WUxxZmUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD00Zjg2ZTNhNGIzMWVmOWY5OWY3ZTlmZmUwNGRhYzA4NjUxZjZmN2U1Y2NkMzAwZTk",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&event_type=GIF_SEARCH&gif_id=g7YDlrD5YLqfe&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&event_type=GIF_SEARCH&gif_id=g7YDlrD5YLqfe&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&event_type=GIF_SEARCH&gif_id=g7YDlrD5YLqfe&action_type=SENT"
                }
            }
        },
        {
            "type": "gif",
            "id": "kvrvnB158J4fm",
            "url": "https://giphy.com/gifs/cat-kitten-kittens-kvrvnB158J4fm",
            "slug": "cat-kitten-kittens-kvrvnB158J4fm",
            "bitly_gif_url": "https://gph.is/1hEQCdt",
            "bitly_url": "https://gph.is/1hEQCdt",
            "embed_url": "https://giphy.com/embed/kvrvnB158J4fm",
            "username": "",
            "source": "https://tumblr.com",
            "title": "Sweet Kisses Cat GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "tumblr.com",
            "source_post_url": "https://tumblr.com",
            "is_sticker": 0,
            "import_datetime": "2014-01-20 06:43:19",
            "trending_datetime": "1970-01-01 00:00:00",
            "images": {
                "downsized_large": {
                    "height": "180",
                    "size": "618008",
                    "url": "https://media2.giphy.com/media/kvrvnB158J4fm/giphy.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.gif",
                    "width": "279"
                },
                "fixed_height_small_still": {
                    "height": "100",
                    "size": "9709",
                    "url": "https://media2.giphy.com/media/kvrvnB158J4fm/100_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100_s.gif",
                    "width": "155"
                },
                "original": {
                    "frames": "22",
                    "hash": "11cad1752619a9ff882910436836cf9f",
                    "height": "180",
                    "mp4": "https://media2.giphy.com/media/kvrvnB158J4fm/giphy.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.mp4",
                    "mp4_size": "422454",
                    "size": "618008",
                    "url": "https://media2.giphy.com/media/kvrvnB158J4fm/giphy.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.gif",
                    "webp": "https://media2.giphy.com/media/kvrvnB158J4fm/giphy.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.webp",
                    "webp_size": "249976",
                    "width": "279"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "size": "160063",
                    "url": "https://media2.giphy.com/media/kvrvnB158J4fm/200_d.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200_d.gif",
                    "webp": "https://media2.giphy.com/media/kvrvnB158J4fm/200_d.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200_d.webp",
                    "webp_size": "92840",
                    "width": "310"
                },
                "downsized_still": {
                    "height": "180",
                    "size": "618008",
                    "url": "https://media2.giphy.com/media/kvrvnB158J4fm/giphy_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy_s.gif",
                    "width": "279"
                },
                "fixed_height_still": {
                    "height": "200",
                    "size": "25934",
                    "url": "https://media2.giphy.com/media/kvrvnB158J4fm/200_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200_s.gif",
                    "width": "310"
                },
                "downsized_medium": {
                    "height": "180",
                    "size": "618008",
                    "url": "https://media2.giphy.com/media/kvrvnB158J4fm/giphy.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.gif",
                    "width": "279"
                },
                "downsized": {
                    "height": "180",
                    "size": "618008",
                    "url": "https://media2.giphy.com/media/kvrvnB158J4fm/giphy.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.gif",
                    "width": "279"
                },
                "preview_webp": {
                    "height": "100",
                    "size": "42770",
                    "url": "https://media2.giphy.com/media/kvrvnB158J4fm/giphy-preview.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-preview.webp",
                    "width": "156"
                },
                "original_mp4": {
                    "height": "308",
                    "mp4": "https://media2.giphy.com/media/kvrvnB158J4fm/giphy.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.mp4",
                    "mp4_size": "422454",
                    "width": "480"
                },
                "fixed_height_small": {
                    "height": "100",
                    "mp4": "https://media2.giphy.com/media/kvrvnB158J4fm/100.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100.mp4",
                    "mp4_size": "45320",
                    "size": "177547",
                    "url": "https://media2.giphy.com/media/kvrvnB158J4fm/100.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100.gif",
                    "webp": "https://media2.giphy.com/media/kvrvnB158J4fm/100.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100.webp",
                    "webp_size": "95308",
                    "width": "155"
                },
                "fixed_height": {
                    "height": "200",
                    "mp4": "https://media2.giphy.com/media/kvrvnB158J4fm/200.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200.mp4",
                    "mp4_size": "160232",
                    "size": "568736",
                    "url": "https://media2.giphy.com/media/kvrvnB158J4fm/200.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200.gif",
                    "webp": "https://media2.giphy.com/media/kvrvnB158J4fm/200.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200.webp",
                    "webp_size": "272432",
                    "width": "310"
                },
                "downsized_small": {
                    "height": "180",
                    "mp4": "https://media2.giphy.com/media/kvrvnB158J4fm/giphy-downsized-small.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-downsized-small.mp4",
                    "mp4_size": "185029",
                    "width": "278"
                },
                "preview": {
                    "height": "142",
                    "mp4": "https://media2.giphy.com/media/kvrvnB158J4fm/giphy-preview.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-preview.mp4",
                    "mp4_size": "38593",
                    "width": "219"
                },
                "fixed_width_downsampled": {
                    "height": "129",
                    "size": "79925",
                    "url": "https://media2.giphy.com/media/kvrvnB158J4fm/200w_d.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w_d.gif",
                    "webp": "https://media2.giphy.com/media/kvrvnB158J4fm/200w_d.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w_d.webp",
                    "webp_size": "44598",
                    "width": "200"
                },
                "fixed_width_small_still": {
                    "height": "65",
                    "size": "4636",
                    "url": "https://media2.giphy.com/media/kvrvnB158J4fm/100w_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w_s.gif",
                    "width": "100"
                },
                "fixed_width_small": {
                    "height": "65",
                    "mp4": "https://media2.giphy.com/media/kvrvnB158J4fm/100w.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w.mp4",
                    "mp4_size": "23203",
                    "size": "87109",
                    "url": "https://media2.giphy.com/media/kvrvnB158J4fm/100w.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w.gif",
                    "webp": "https://media2.giphy.com/media/kvrvnB158J4fm/100w.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w.webp",
                    "webp_size": "50034",
                    "width": "100"
                },
                "original_still": {
                    "height": "180",
                    "size": "32555",
                    "url": "https://media2.giphy.com/media/kvrvnB158J4fm/giphy_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy_s.gif",
                    "width": "279"
                },
                "fixed_width_still": {
                    "height": "129",
                    "size": "12352",
                    "url": "https://media2.giphy.com/media/kvrvnB158J4fm/200w_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w_s.gif",
                    "width": "200"
                },
                "looping": {
                    "mp4": "https://media2.giphy.com/media/kvrvnB158J4fm/giphy-loop.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-loop.mp4",
                    "mp4_size": "2235487"
                },
                "fixed_width": {
                    "height": "129",
                    "mp4": "https://media2.giphy.com/media/kvrvnB158J4fm/200w.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w.mp4",
                    "mp4_size": "70544",
                    "size": "280859",
                    "url": "https://media2.giphy.com/media/kvrvnB158J4fm/200w.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w.gif",
                    "webp": "https://media2.giphy.com/media/kvrvnB158J4fm/200w.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w.webp",
                    "webp_size": "137282",
                    "width": "200"
                },
                "preview_gif": {
                    "height": "55",
                    "size": "49524",
                    "url": "https://media2.giphy.com/media/kvrvnB158J4fm/giphy-preview.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-preview.gif",
                    "width": "85"
                },
                "480w_still": {
                    "url": "https://media0.giphy.com/media/kvrvnB158J4fm/480w_s.jpg?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=480w_s.jpg",
                    "width": "480",
                    "height": "310"
                }
            },
            "analytics_response_payload": "e=Z2lmX2lkPWt2cnZuQjE1OEo0Zm0mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD00Zjg2ZTNhNGIzMWVmOWY5OWY3ZTlmZmUwNGRhYzA4NjUxZjZmN2U1Y2NkMzAwZTk",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&event_type=GIF_SEARCH&gif_id=kvrvnB158J4fm&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&event_type=GIF_SEARCH&gif_id=kvrvnB158J4fm&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&event_type=GIF_SEARCH&gif_id=kvrvnB158J4fm&action_type=SENT"
                }
            }
        },
        {
            "type": "gif",
            "id": "1zhM6usJvu3xoyurA1",
            "url": "https://giphy.com/gifs/cute-aww-eyebleach-1zhM6usJvu3xoyurA1",
            "slug": "cute-aww-eyebleach-1zhM6usJvu3xoyurA1",
            "bitly_gif_url": "https://gph.is/2QM8DNt",
            "bitly_url": "https://gph.is/2QM8DNt",
            "embed_url": "https://giphy.com/embed/1zhM6usJvu3xoyurA1",
            "username": "",
            "source": "https://www.reddit.com/r/Eyebleach/comments/9nvg11/the_duties_of_a_mother/",
            "title": "Aww Mama GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "www.reddit.com",
            "source_post_url": "https://www.reddit.com/r/Eyebleach/comments/9nvg11/the_duties_of_a_mother/",
            "is_sticker": 0,
            "import_datetime": "2018-10-14 06:10:37",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "hd": {
                    "height": "800",
                    "mp4": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/giphy-hd.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-hd.mp4",
                    "mp4_size": "2471788",
                    "width": "640"
                },
                "downsized_large": {
                    "height": "384",
                    "size": "7338188",
                    "url": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/giphy-downsized-large.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-downsized-large.gif",
                    "width": "307"
                },
                "fixed_height_small_still": {
                    "height": "100",
                    "size": "8127",
                    "url": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/100_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100_s.gif",
                    "width": "80"
                },
                "original": {
                    "frames": "208",
                    "hash": "47844abca1e67eb10bc9026dd1cd7a91",
                    "height": "480",
                    "mp4": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/giphy.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.mp4",
                    "mp4_size": "1517154",
                    "size": "20107879",
                    "url": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/giphy.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.gif",
                    "webp": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/giphy.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.webp",
                    "webp_size": "3261614",
                    "width": "384"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "size": "160184",
                    "url": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/200_d.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200_d.gif",
                    "webp": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/200_d.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200_d.webp",
                    "webp_size": "30782",
                    "width": "160"
                },
                "downsized_still": {
                    "height": "204",
                    "size": "27272",
                    "url": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/giphy-downsized_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-downsized_s.gif",
                    "width": "163"
                },
                "fixed_height_still": {
                    "height": "200",
                    "size": "24940",
                    "url": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/200_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200_s.gif",
                    "width": "160"
                },
                "downsized_medium": {
                    "height": "299",
                    "size": "3388468",
                    "url": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/giphy-downsized-medium.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-downsized-medium.gif",
                    "width": "239"
                },
                "downsized": {
                    "height": "204",
                    "size": "1449638",
                    "url": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/giphy-downsized.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-downsized.gif",
                    "width": "163"
                },
                "preview_webp": {
                    "height": "200",
                    "size": "47908",
                    "url": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/giphy-preview.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-preview.webp",
                    "width": "160"
                },
                "original_mp4": {
                    "height": "480",
                    "mp4": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/giphy.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.mp4",
                    "mp4_size": "1517154",
                    "width": "384"
                },
                "fixed_height_small": {
                    "height": "100",
                    "mp4": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/100.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100.mp4",
                    "mp4_size": "160311",
                    "size": "1108798",
                    "url": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/100.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100.gif",
                    "webp": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/100.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100.webp",
                    "webp_size": "405296",
                    "width": "80"
                },
                "fixed_height": {
                    "height": "200",
                    "mp4": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/200.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200.mp4",
                    "mp4_size": "418131",
                    "size": "4083150",
                    "url": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/200.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200.gif",
                    "webp": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/200.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200.webp",
                    "webp_size": "1075128",
                    "width": "160"
                },
                "downsized_small": {
                    "height": "152",
                    "mp4": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/giphy-downsized-small.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-downsized-small.mp4",
                    "mp4_size": "175282",
                    "width": "120"
                },
                "preview": {
                    "height": "332",
                    "mp4": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/giphy-preview.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-preview.mp4",
                    "mp4_size": "33390",
                    "width": "264"
                },
                "fixed_width_downsampled": {
                    "height": "250",
                    "size": "236913",
                    "url": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/200w_d.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w_d.gif",
                    "webp": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/200w_d.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w_d.webp",
                    "webp_size": "42990",
                    "width": "200"
                },
                "fixed_width_small_still": {
                    "height": "125",
                    "size": "11519",
                    "url": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/100w_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w_s.gif",
                    "width": "100"
                },
                "fixed_width_small": {
                    "height": "125",
                    "mp4": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/100w.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w.mp4",
                    "mp4_size": "43170",
                    "size": "1701971",
                    "url": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/100w.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w.gif",
                    "webp": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/100w.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w.webp",
                    "webp_size": "564722",
                    "width": "100"
                },
                "original_still": {
                    "height": "480",
                    "size": "101234",
                    "url": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/giphy_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy_s.gif",
                    "width": "384"
                },
                "fixed_width_still": {
                    "height": "250",
                    "size": "35714",
                    "url": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/200w_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w_s.gif",
                    "width": "200"
                },
                "looping": {
                    "mp4": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/giphy-loop.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-loop.mp4",
                    "mp4_size": "1525150"
                },
                "fixed_width": {
                    "height": "250",
                    "mp4": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/200w.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w.mp4",
                    "mp4_size": "599214",
                    "size": "8134448",
                    "url": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/200w.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w.gif",
                    "webp": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/200w.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w.webp",
                    "webp_size": "1473922",
                    "width": "200"
                },
                "preview_gif": {
                    "height": "98",
                    "size": "48191",
                    "url": "https://media1.giphy.com/media/1zhM6usJvu3xoyurA1/giphy-preview.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-preview.gif",
                    "width": "78"
                },
                "480w_still": {
                    "url": "https://media3.giphy.com/media/1zhM6usJvu3xoyurA1/480w_s.jpg?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=480w_s.jpg",
                    "width": "480",
                    "height": "600"
                }
            },
            "analytics_response_payload": "e=Z2lmX2lkPTF6aE02dXNKdnUzeG95dXJBMSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTRmODZlM2E0YjMxZWY5Zjk5ZjdlOWZmZTA0ZGFjMDg2NTFmNmY3ZTVjY2QzMDBlOQ",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&event_type=GIF_SEARCH&gif_id=1zhM6usJvu3xoyurA1&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&event_type=GIF_SEARCH&gif_id=1zhM6usJvu3xoyurA1&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&event_type=GIF_SEARCH&gif_id=1zhM6usJvu3xoyurA1&action_type=SENT"
                }
            }
        },
        {
            "type": "gif",
            "id": "ExMGjbktr4phe",
            "url": "https://giphy.com/gifs/aww-edition-ExMGjbktr4phe",
            "slug": "aww-edition-ExMGjbktr4phe",
            "bitly_gif_url": "https://gph.is/1pSdkSn",
            "bitly_url": "https://gph.is/1pSdkSn",
            "embed_url": "https://giphy.com/embed/ExMGjbktr4phe",
            "username": "",
            "source": "https://www.reddit.com/r/aww_gifs/comments/27efb3/we_move_as_one_kitten_edition/",
            "title": "Staring Up And Down GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "www.reddit.com",
            "source_post_url": "https://www.reddit.com/r/aww_gifs/comments/27efb3/we_move_as_one_kitten_edition/",
            "is_sticker": 0,
            "import_datetime": "2014-07-01 07:02:21",
            "trending_datetime": "2017-02-19 07:30:01",
            "images": {
                "downsized_large": {
                    "height": "250",
                    "size": "940941",
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/giphy.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.gif",
                    "width": "424"
                },
                "fixed_height_small_still": {
                    "height": "100",
                    "size": "13804",
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/100_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100_s.gif",
                    "width": "170"
                },
                "original": {
                    "frames": "24",
                    "hash": "d16ce4616a154148e8fdba3ab533b44a",
                    "height": "250",
                    "mp4": "https://media1.giphy.com/media/ExMGjbktr4phe/giphy.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.mp4",
                    "mp4_size": "397464",
                    "size": "940941",
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/giphy.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.gif",
                    "webp": "https://media1.giphy.com/media/ExMGjbktr4phe/giphy.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.webp",
                    "webp_size": "574394",
                    "width": "424"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "size": "198939",
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/200_d.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200_d.gif",
                    "webp": "https://media1.giphy.com/media/ExMGjbktr4phe/200_d.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200_d.webp",
                    "webp_size": "116180",
                    "width": "339"
                },
                "downsized_still": {
                    "height": "250",
                    "size": "940941",
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/giphy_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy_s.gif",
                    "width": "424"
                },
                "fixed_height_still": {
                    "height": "200",
                    "size": "36507",
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/200_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200_s.gif",
                    "width": "339"
                },
                "downsized_medium": {
                    "height": "250",
                    "size": "940941",
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/giphy.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.gif",
                    "width": "424"
                },
                "downsized": {
                    "height": "250",
                    "size": "940941",
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/giphy.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.gif",
                    "width": "424"
                },
                "preview_webp": {
                    "height": "82",
                    "size": "40626",
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/giphy-preview.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-preview.webp",
                    "width": "140"
                },
                "original_mp4": {
                    "height": "282",
                    "mp4": "https://media1.giphy.com/media/ExMGjbktr4phe/giphy.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.mp4",
                    "mp4_size": "397464",
                    "width": "480"
                },
                "fixed_height_small": {
                    "height": "100",
                    "mp4": "https://media1.giphy.com/media/ExMGjbktr4phe/100.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100.mp4",
                    "mp4_size": "50190",
                    "size": "219511",
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/100.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100.gif",
                    "webp": "https://media1.giphy.com/media/ExMGjbktr4phe/100.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100.webp",
                    "webp_size": "128654",
                    "width": "170"
                },
                "fixed_height": {
                    "height": "200",
                    "mp4": "https://media1.giphy.com/media/ExMGjbktr4phe/200.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200.mp4",
                    "mp4_size": "167257",
                    "size": "733945",
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/200.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200.gif",
                    "webp": "https://media1.giphy.com/media/ExMGjbktr4phe/200.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200.webp",
                    "webp_size": "367778",
                    "width": "339"
                },
                "downsized_small": {
                    "height": "180",
                    "mp4": "https://media1.giphy.com/media/ExMGjbktr4phe/giphy-downsized-small.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-downsized-small.mp4",
                    "mp4_size": "73473",
                    "width": "305"
                },
                "preview": {
                    "height": "98",
                    "mp4": "https://media1.giphy.com/media/ExMGjbktr4phe/giphy-preview.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-preview.mp4",
                    "mp4_size": "28671",
                    "width": "166"
                },
                "fixed_width_downsampled": {
                    "height": "118",
                    "size": "79186",
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/200w_d.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w_d.gif",
                    "webp": "https://media1.giphy.com/media/ExMGjbktr4phe/200w_d.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w_d.webp",
                    "webp_size": "48152",
                    "width": "200"
                },
                "fixed_width_small_still": {
                    "height": "59",
                    "size": "5166",
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/100w_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w_s.gif",
                    "width": "100"
                },
                "fixed_width_small": {
                    "height": "59",
                    "mp4": "https://media1.giphy.com/media/ExMGjbktr4phe/100w.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w.mp4",
                    "mp4_size": "22249",
                    "size": "87918",
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/100w.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w.gif",
                    "webp": "https://media1.giphy.com/media/ExMGjbktr4phe/100w.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w.webp",
                    "webp_size": "57494",
                    "width": "100"
                },
                "original_still": {
                    "height": "250",
                    "size": "53567",
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/giphy_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy_s.gif",
                    "width": "424"
                },
                "fixed_width_still": {
                    "height": "118",
                    "size": "16384",
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/200w_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w_s.gif",
                    "width": "200"
                },
                "looping": {
                    "mp4": "https://media1.giphy.com/media/ExMGjbktr4phe/giphy-loop.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-loop.mp4",
                    "mp4_size": "2681802"
                },
                "fixed_width": {
                    "height": "118",
                    "mp4": "https://media1.giphy.com/media/ExMGjbktr4phe/200w.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w.mp4",
                    "mp4_size": "67652",
                    "size": "287213",
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/200w.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w.gif",
                    "webp": "https://media1.giphy.com/media/ExMGjbktr4phe/200w.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w.webp",
                    "webp_size": "162632",
                    "width": "200"
                },
                "preview_gif": {
                    "height": "56",
                    "size": "48531",
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/giphy-preview.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-preview.gif",
                    "width": "95"
                },
                "480w_still": {
                    "url": "https://media1.giphy.com/media/ExMGjbktr4phe/480w_s.jpg?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=480w_s.jpg",
                    "width": "480",
                    "height": "283"
                }
            },
            "analytics_response_payload": "e=Z2lmX2lkPUV4TUdqYmt0cjRwaGUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD00Zjg2ZTNhNGIzMWVmOWY5OWY3ZTlmZmUwNGRhYzA4NjUxZjZmN2U1Y2NkMzAwZTk",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&event_type=GIF_SEARCH&gif_id=ExMGjbktr4phe&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&event_type=GIF_SEARCH&gif_id=ExMGjbktr4phe&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&event_type=GIF_SEARCH&gif_id=ExMGjbktr4phe&action_type=SENT"
                }
            }
        },
        {
            "type": "gif",
            "id": "LMn7PRCVDcnvO",
            "url": "https://giphy.com/gifs/kitties-LMn7PRCVDcnvO",
            "slug": "kitties-LMn7PRCVDcnvO",
            "bitly_gif_url": "https://gph.is/2cv3xQY",
            "bitly_url": "https://gph.is/2cv3xQY",
            "embed_url": "https://giphy.com/embed/LMn7PRCVDcnvO",
            "username": "",
            "source": "https://www.sodahead.com/living/happy-birthday-sister-jean-lets-celebrate...",
            "title": "kitten dancing GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "www.sodahead.com",
            "source_post_url": "https://www.sodahead.com/living/happy-birthday-sister-jean-lets-celebrate...",
            "is_sticker": 0,
            "import_datetime": "2016-09-25 23:26:55",
            "trending_datetime": "2019-05-30 17:00:01",
            "images": {
                "downsized_large": {
                    "height": "299",
                    "size": "102579",
                    "url": "https://media1.giphy.com/media/LMn7PRCVDcnvO/giphy.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.gif",
                    "width": "280"
                },
                "fixed_height_small_still": {
                    "height": "100",
                    "size": "6049",
                    "url": "https://media1.giphy.com/media/LMn7PRCVDcnvO/100_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100_s.gif",
                    "width": "94"
                },
                "original": {
                    "frames": "4",
                    "hash": "53ed0ff2c937890d1d82b45e5ee00e00",
                    "height": "299",
                    "mp4": "https://media1.giphy.com/media/LMn7PRCVDcnvO/giphy.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.mp4",
                    "mp4_size": "40458",
                    "size": "102579",
                    "url": "https://media1.giphy.com/media/LMn7PRCVDcnvO/giphy.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.gif",
                    "webp": "https://media1.giphy.com/media/LMn7PRCVDcnvO/giphy.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.webp",
                    "webp_size": "58420",
                    "width": "280"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "size": "66641",
                    "url": "https://media1.giphy.com/media/LMn7PRCVDcnvO/200_d.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200_d.gif",
                    "webp": "https://media1.giphy.com/media/LMn7PRCVDcnvO/200_d.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200_d.webp",
                    "webp_size": "23362",
                    "width": "187"
                },
                "downsized_still": {
                    "height": "299",
                    "size": "102579",
                    "url": "https://media1.giphy.com/media/LMn7PRCVDcnvO/giphy_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy_s.gif",
                    "width": "280"
                },
                "fixed_height_still": {
                    "height": "200",
                    "size": "19816",
                    "url": "https://media1.giphy.com/media/LMn7PRCVDcnvO/200_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200_s.gif",
                    "width": "187"
                },
                "downsized_medium": {
                    "height": "299",
                    "size": "102579",
                    "url": "https://media1.giphy.com/media/LMn7PRCVDcnvO/giphy.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.gif",
                    "width": "280"
                },
                "downsized": {
                    "height": "299",
                    "size": "102579",
                    "url": "https://media1.giphy.com/media/LMn7PRCVDcnvO/giphy.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.gif",
                    "width": "280"
                },
                "preview_webp": {
                    "height": "286",
                    "size": "49486",
                    "url": "https://media1.giphy.com/media/LMn7PRCVDcnvO/giphy-preview.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-preview.webp",
                    "width": "268"
                },
                "original_mp4": {
                    "height": "512",
                    "mp4": "https://media1.giphy.com/media/LMn7PRCVDcnvO/giphy.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy.mp4",
                    "mp4_size": "40458",
                    "width": "480"
                },
                "fixed_height_small": {
                    "height": "100",
                    "mp4": "https://media1.giphy.com/media/LMn7PRCVDcnvO/100.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100.mp4",
                    "mp4_size": "3864",
                    "size": "19047",
                    "url": "https://media1.giphy.com/media/LMn7PRCVDcnvO/100.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100.gif",
                    "webp": "https://media1.giphy.com/media/LMn7PRCVDcnvO/100.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100.webp",
                    "webp_size": "8078",
                    "width": "94"
                },
                "fixed_height": {
                    "height": "200",
                    "mp4": "https://media1.giphy.com/media/LMn7PRCVDcnvO/200.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200.mp4",
                    "mp4_size": "8426",
                    "size": "66641",
                    "url": "https://media1.giphy.com/media/LMn7PRCVDcnvO/200.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200.gif",
                    "webp": "https://media1.giphy.com/media/LMn7PRCVDcnvO/200.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200.webp",
                    "webp_size": "23362",
                    "width": "187"
                },
                "downsized_small": {
                    "height": "298",
                    "mp4": "https://media1.giphy.com/media/LMn7PRCVDcnvO/giphy-downsized-small.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-downsized-small.mp4",
                    "mp4_size": "20112",
                    "width": "280"
                },
                "preview": {
                    "height": "298",
                    "mp4": "https://media1.giphy.com/media/LMn7PRCVDcnvO/giphy-preview.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-preview.mp4",
                    "mp4_size": "20112",
                    "width": "280"
                },
                "fixed_width_downsampled": {
                    "height": "214",
                    "size": "77107",
                    "url": "https://media1.giphy.com/media/LMn7PRCVDcnvO/200w_d.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w_d.gif",
                    "webp": "https://media1.giphy.com/media/LMn7PRCVDcnvO/200w_d.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w_d.webp",
                    "webp_size": "26992",
                    "width": "200"
                },
                "fixed_width_small_still": {
                    "height": "107",
                    "size": "6912",
                    "url": "https://media1.giphy.com/media/LMn7PRCVDcnvO/100w_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w_s.gif",
                    "width": "100"
                },
                "fixed_width_small": {
                    "height": "107",
                    "mp4": "https://media1.giphy.com/media/LMn7PRCVDcnvO/100w.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w.mp4",
                    "mp4_size": "4124",
                    "size": "22149",
                    "url": "https://media1.giphy.com/media/LMn7PRCVDcnvO/100w.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w.gif",
                    "webp": "https://media1.giphy.com/media/LMn7PRCVDcnvO/100w.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=100w.webp",
                    "webp_size": "9172",
                    "width": "100"
                },
                "original_still": {
                    "height": "299",
                    "size": "30540",
                    "url": "https://media1.giphy.com/media/LMn7PRCVDcnvO/giphy_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy_s.gif",
                    "width": "280"
                },
                "fixed_width_still": {
                    "height": "214",
                    "size": "22869",
                    "url": "https://media1.giphy.com/media/LMn7PRCVDcnvO/200w_s.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w_s.gif",
                    "width": "200"
                },
                "looping": {
                    "mp4": "https://media1.giphy.com/media/LMn7PRCVDcnvO/giphy-loop.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-loop.mp4",
                    "mp4_size": "1400407"
                },
                "fixed_width": {
                    "height": "214",
                    "mp4": "https://media1.giphy.com/media/LMn7PRCVDcnvO/200w.mp4?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w.mp4",
                    "mp4_size": "9347",
                    "size": "77107",
                    "url": "https://media1.giphy.com/media/LMn7PRCVDcnvO/200w.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w.gif",
                    "webp": "https://media1.giphy.com/media/LMn7PRCVDcnvO/200w.webp?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=200w.webp",
                    "webp_size": "26992",
                    "width": "200"
                },
                "preview_gif": {
                    "height": "171",
                    "size": "47776",
                    "url": "https://media1.giphy.com/media/LMn7PRCVDcnvO/giphy-preview.gif?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=giphy-preview.gif",
                    "width": "160"
                },
                "480w_still": {
                    "url": "https://media4.giphy.com/media/LMn7PRCVDcnvO/480w_s.jpg?cid=4f86e3a4b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&rid=480w_s.jpg",
                    "width": "480",
                    "height": "513"
                }
            },
            "analytics_response_payload": "e=Z2lmX2lkPUxNbjdQUkNWRGNudk8mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD00Zjg2ZTNhNGIzMWVmOWY5OWY3ZTlmZmUwNGRhYzA4NjUxZjZmN2U1Y2NkMzAwZTk",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&event_type=GIF_SEARCH&gif_id=LMn7PRCVDcnvO&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&event_type=GIF_SEARCH&gif_id=LMn7PRCVDcnvO&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=b31ef9f99f7e9ffe04dac08651f6f7e5ccd300e9&event_type=GIF_SEARCH&gif_id=LMn7PRCVDcnvO&action_type=SENT"
                }
            }
        }
    ]);
    // data.map(() => );
    const pintarCartas = () => {
        return data.map((item) => <Card src={item.images.downsized_large.url}></Card>);
    }
    return (
        <>
        <label>Busca tus gifs favoritos!</label>
        <input type="text" placeholder="Escribe los gifs que buscas" ></input>
        <div className="card-manager">
        {pintarCartas()}
        </div>
        </>
    );
};

export default CardManager;