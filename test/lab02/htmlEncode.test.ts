import {expect} from 'chai'
import {encodeHtml} from '../../labs/lab02/htmlEncode/htmlEncode'

describe('htmlEncode: ', function () {

    describe('function encodeHtml', function () {

        it('All specified characters must be encoded correctly', function () {
            expect(encodeHtml(`Cat <says> "Meow". M&M\'s`)).eql('Cat &lt;says&gt; &quot;Meow&quot;. M&amp;M&apos;s')
        })

        it('A string without special characters should not be encoded', function () {
            expect(encodeHtml(`123`)).eql('123')
        })

        it('A string of spaces should not be encoded', function () {
            expect(encodeHtml(` `)).eql(' ')
        })

        it('A string of only the specified special characters must be encoded', function () {
            expect(encodeHtml(`&"'<>`)).eql('&amp;&quot;&apos;&lt;&gt;')
        })

        it('A string of special characters only should be encoded', function () {
            expect(encodeHtml(`&"'<>!@#$%^<>&//`)).eql('&amp;&quot;&apos;&lt;&gt;!@#$%^&lt;&gt;&amp;//')
        })
    })
})