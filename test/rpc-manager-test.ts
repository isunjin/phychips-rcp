import { Packet } from './../lib/packet';
import { RcpManager } from './../lib/rcp-manager';
import * as sinon from 'sinon';
import { expect } from 'chai';

describe('getInstance function test', () => {
    it('should be instance of RcpManager', () => {
        const result = new RcpManager();
        expect(result).to.be.instanceof(RcpManager);
    });
});

describe('dataReceived function test', () => {
    it('should invoke the callback', () => {
        let spy = sinon.spy()
        const instance = new RcpManager();
        instance.on('packet', spy);
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x15, 0x80, 0x75, 0x3d, 0x7e, 0x5c, 0x46]));
        sinon.assert.calledOnce(spy);
    });
    it('should be not invoke the callback', () => {
        let spy = sinon.spy()
        const instance = new RcpManager();
        instance.on('packet', spy);
        instance.dataReceived(Buffer.from([]));
        sinon.assert.notCalled(spy);
    });
    it('should invoke the callback args', () => {
        let spy = sinon.spy()
        const instance = new RcpManager();
        instance.on('packet', spy);
        instance.dataReceived(Buffer.from([0xbb, 0x01, 0xff, 0x00, 0x01, 0x0b, 0x7e, 0x65, 0x8c]));
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x18, 0x90, 0x54, 0x93, 0x7e, 0xe9, 0x1c]));
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x18, 0x30, 0x58, 0xe0, 0x7e, 0x2b, 0x01, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00]));
        instance.dataReceived(Buffer.from([0x16, 0x60, 0x16, 0x01, 0x55, 0x18, 0x30, 0x58, 0xe0, 0x7e, 0x2b, 0x01]));
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x21, 0x80, 0x35, 0x98, 0x7e, 0x26, 0x88]));
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x15, 0x70, 0x77, 0x84, 0x7e, 0x09, 0xfe, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00]));
        instance.dataReceived(Buffer.from([0x16, 0x60, 0x16, 0x01, 0x55, 0x24, 0x30, 0x1d, 0xb5, 0x7e, 0xab, 0xd3, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x18, 0x40, 0x5b, 0x02, 0x7e]));
        instance.dataReceived(Buffer.from([0x46, 0xf4, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x20, 0x10, 0x47, 0xd9, 0x7e, 0xc2, 0xd3, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2]));
        instance.dataReceived(Buffer.from([0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x17, 0x60, 0x63, 0xb9, 0x7e, 0xba, 0xb0]));
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x23, 0x80, 0x22, 0xd7, 0x7e, 0xb9, 0x0a, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00]));
        instance.dataReceived(Buffer.from([0x16, 0x60, 0x16, 0x01, 0x55, 0x28, 0x10, 0x04, 0xa9, 0x7e, 0x8c, 0x5a, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x20, 0x00, 0x49, 0xe4, 0x7e]));
        instance.dataReceived(Buffer.from([0xb1, 0xbc, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x21, 0x00, 0x3d, 0x6e, 0x7e, 0xeb, 0x76, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2]));
        instance.dataReceived(Buffer.from([0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x22, 0x80, 0x2d, 0xdb, 0x7e, 0x7a, 0x07]));
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x18, 0x90, 0x54, 0x93, 0x7e, 0xe9, 0x1c, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00]));
        instance.dataReceived(Buffer.from([0x16, 0x60, 0x16, 0x01, 0x55, 0x24, 0x30, 0x1d, 0xb5, 0x7e, 0xab, 0xd3, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x25, 0x30, 0x17, 0x19, 0x7e]));
        instance.dataReceived(Buffer.from([0x9e, 0x50, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x16, 0x30, 0x6e, 0xd5, 0x7e, 0x69, 0xcc, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2]));
        instance.dataReceived(Buffer.from([0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x15, 0x80, 0x75, 0x3d, 0x7e, 0x5c, 0x46, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x15, 0x70, 0x77]));
        instance.dataReceived(Buffer.from([0x84, 0x7e, 0x09, 0xfe, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x16, 0x40, 0x70, 0xe1, 0x7e, 0xba, 0x8a, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30]));
        instance.dataReceived(Buffer.from([0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x15, 0x70, 0x77, 0x84, 0x7e, 0x09, 0xfe, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x16]));
        instance.dataReceived(Buffer.from([0x30, 0x6e, 0xd5, 0x7e, 0x69, 0xcc]));
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x18, 0x30, 0x58, 0xe0, 0x7e, 0x2b, 0x01, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00]));
        instance.dataReceived(Buffer.from([0x16, 0x60, 0x16, 0x01, 0x55, 0x18, 0x90, 0x54, 0x93, 0x7e, 0xe9, 0x1c, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x19, 0x00, 0x52, 0x67, 0x7e]));
        instance.dataReceived(Buffer.from([0xe8, 0x77, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x20, 0x10, 0x47, 0xd9, 0x7e, 0xc2, 0xd3, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2]));
        instance.dataReceived(Buffer.from([0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x17, 0x60, 0x63, 0xb9, 0x7e, 0xba, 0xb0, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x16, 0x40, 0x70]));
        instance.dataReceived(Buffer.from([0xe1, 0x7e, 0xba, 0x8a, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x15, 0x70, 0x77, 0x84, 0x7e, 0x09, 0xfe, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30]));
        instance.dataReceived(Buffer.from([0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x18, 0x30, 0x58, 0xe0, 0x7e, 0x2b, 0x01, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x16]));
        instance.dataReceived(Buffer.from([0x30, 0x6e, 0xd5, 0x7e, 0x69, 0xcc, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x20, 0x00, 0x49, 0xe4, 0x7e, 0xb1, 0xbc, 0xbb, 0x02, 0x22, 0x00]));
        instance.dataReceived(Buffer.from([0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x21, 0x80, 0x35, 0x98, 0x7e, 0x26, 0x88, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01]));
        instance.dataReceived(Buffer.from([0x55, 0x15, 0x80, 0x75, 0x3d, 0x7e, 0x5c, 0x46]));
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x16, 0x30, 0x6e, 0xd5, 0x7e, 0x69, 0xcc]));
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x28, 0x10, 0x04, 0xa9, 0x7e, 0x8c, 0x5a, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00]));
        instance.dataReceived(Buffer.from([0x16, 0x60, 0x16, 0x01, 0x55, 0x24, 0x30, 0x1d, 0xb5, 0x7e, 0xab, 0xd3, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x15, 0x80, 0x75, 0x3d, 0x7e]));
        instance.dataReceived(Buffer.from([0x5c, 0x46, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x21, 0x70, 0x37, 0x94, 0x7e, 0x92, 0xc8, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2]));
        instance.dataReceived(Buffer.from([0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x16, 0x40, 0x70, 0xe1, 0x7e, 0xba, 0x8a, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x15, 0x70, 0x77]));
        instance.dataReceived(Buffer.from([0x84, 0x7e, 0x09, 0xfe, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x24, 0x40, 0x1f, 0x54, 0x7e, 0xa4, 0x45, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30]));
        instance.dataReceived(Buffer.from([0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x20, 0x10, 0x47, 0xd9, 0x7e, 0xc2, 0xd3, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x18]));
        instance.dataReceived(Buffer.from([0x40, 0x5b, 0x02, 0x7e, 0x46, 0xf4]));
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x22, 0x80, 0x2d, 0xdb, 0x7e, 0x7a, 0x07, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00]));
        instance.dataReceived(Buffer.from([0x16, 0x60, 0x16, 0x01, 0x55, 0x16, 0x30, 0x6e, 0xd5, 0x7e, 0x69, 0xcc, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x16, 0x40, 0x70, 0xe1, 0x7e]));
        instance.dataReceived(Buffer.from([0xba, 0x8a, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x28, 0x10, 0x04, 0xa9, 0x7e, 0x8c, 0x5a, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2]));
        instance.dataReceived(Buffer.from([0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x17, 0x60, 0x63, 0xb9, 0x7e, 0xba, 0xb0]));
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x20, 0x00, 0x49, 0xe4, 0x7e, 0xb1, 0xbc, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00]));
        instance.dataReceived(Buffer.from([0x16, 0x60, 0x16, 0x01, 0x55, 0x15, 0x70, 0x77, 0x84, 0x7e, 0x09, 0xfe, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x23, 0x70, 0x24, 0xa4, 0x7e]));
        instance.dataReceived(Buffer.from([0xc9, 0xed, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x21, 0x10, 0x3b, 0x7f, 0x7e, 0x72, 0x33]));
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x16, 0x40, 0x70, 0xe1, 0x7e, 0xba, 0x8a, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00]));
        instance.dataReceived(Buffer.from([0x16, 0x60, 0x16, 0x01, 0x55, 0x25, 0x40, 0x15, 0x6e, 0x7e, 0x23, 0x8b, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x15, 0x70, 0x77, 0x84, 0x7e]));
        instance.dataReceived(Buffer.from([0x09, 0xfe, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x21, 0x10, 0x3b, 0x7f, 0x7e, 0x72, 0x33]));
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x16, 0x30, 0x6e, 0xd5, 0x7e, 0x69, 0xcc]));
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x17, 0x60, 0x63, 0xb9, 0x7e, 0xba, 0xb0, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00]));
        instance.dataReceived(Buffer.from([0x16, 0x60, 0x16, 0x01, 0x55, 0x16, 0x40, 0x70, 0xe1, 0x7e, 0xba, 0x8a, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x25, 0x30, 0x17, 0x19, 0x7e]));
        instance.dataReceived(Buffer.from([0x9e, 0x50, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x20, 0x00, 0x49, 0xe4, 0x7e, 0xb1, 0xbc, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2]));
        instance.dataReceived(Buffer.from([0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x15, 0x70, 0x77, 0x84, 0x7e, 0x09, 0xfe, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x16, 0x30, 0x6e]));
        instance.dataReceived(Buffer.from([0xd5, 0x7e, 0x69, 0xcc, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x16, 0x40, 0x70, 0xe1, 0x7e, 0xba, 0x8a, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30]));
        instance.dataReceived(Buffer.from([0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x15, 0x80, 0x75, 0x3d, 0x7e, 0x5c, 0x46, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x17]));
        instance.dataReceived(Buffer.from([0x60, 0x63, 0xb9, 0x7e, 0xba, 0xb0]));
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x23, 0x80, 0x22, 0xd7, 0x7e, 0xb9, 0x0a, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00]));
        instance.dataReceived(Buffer.from([0x16, 0x60, 0x16, 0x01, 0x55, 0x28, 0x10, 0x04, 0xa9, 0x7e, 0x8c, 0x5a, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x17, 0x60, 0x63, 0xb9, 0x7e]));
        instance.dataReceived(Buffer.from([0xba, 0xb0, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x23, 0x70, 0x24, 0xa4, 0x7e, 0xc9, 0xed, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2]));
        instance.dataReceived(Buffer.from([0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x18, 0x90, 0x54, 0x93, 0x7e, 0xe9, 0x1c, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x21, 0x10, 0x3b]));
        instance.dataReceived(Buffer.from([0x7f, 0x7e, 0x72, 0x33, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x16, 0x30, 0x6e, 0xd5, 0x7e, 0x69, 0xcc, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30]));
        instance.dataReceived(Buffer.from([0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x16, 0x40, 0x70, 0xe1, 0x7e, 0xba, 0x8a, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x15]));
        instance.dataReceived(Buffer.from([0x70, 0x77, 0x84, 0x7e, 0x09, 0xfe, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x24, 0x40, 0x1f, 0x54, 0x7e, 0xa4, 0x45]));
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x20, 0x10, 0x47, 0xd9, 0x7e, 0xc2, 0xd3, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00]));
        instance.dataReceived(Buffer.from([0x16, 0x60, 0x16, 0x01, 0x55, 0x17, 0x60, 0x63, 0xb9, 0x7e, 0xba, 0xb0, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x18, 0x90, 0x54, 0x93, 0x7e]));
        instance.dataReceived(Buffer.from([0xe9, 0x1c, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x15, 0x70, 0x77, 0x84, 0x7e, 0x09, 0xfe, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2]));
        instance.dataReceived(Buffer.from([0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x18, 0x30, 0x58, 0xe0, 0x7e, 0x2b, 0x01, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x15, 0x80, 0x75, 0x3d, 0x7e, 0x5c, 0x46, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01]));
        instance.dataReceived(Buffer.from([0x40, 0x70, 0xe1, 0x7e, 0xba, 0x8a, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x24, 0x30, 0x1d, 0xb5, 0x7e, 0xab, 0xd3, 0xbb, 0x02, 0x22, 0x00]));
        instance.dataReceived(Buffer.from([0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x25, 0x40, 0x15, 0x6e, 0x7e, 0x23, 0x8b]));
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x16, 0x30, 0x6e, 0xd5, 0x7e, 0x69, 0xcc, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00]));
        instance.dataReceived(Buffer.from([0x16, 0x60, 0x16, 0x01, 0x55, 0x16, 0x30, 0x6e, 0xd5, 0x7e, 0x69, 0xcc, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x15, 0x70, 0x77, 0x84, 0x7e]));
        instance.dataReceived(Buffer.from([0x09, 0xfe]));
        instance.dataReceived(Buffer.from([0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x16, 0x40, 0x70, 0xe1, 0x7e, 0xba, 0x8a, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00]));
        instance.dataReceived(Buffer.from([0x16, 0x60, 0x16, 0x01, 0x55, 0x16, 0x30, 0x6e, 0xd5, 0x7e, 0x69, 0xcc, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x15, 0x70, 0x77, 0x84, 0x7e]));
        instance.dataReceived(Buffer.from([0x09, 0xfe, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x15, 0x80, 0x75, 0x3d, 0x7e, 0x5c, 0x46, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2]));
        instance.dataReceived(Buffer.from([0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x28, 0x10, 0x04, 0xa9, 0x7e, 0x8c, 0x5a, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x18, 0x90, 0x54]));
        instance.dataReceived(Buffer.from([0x93, 0x7e, 0xe9, 0x1c, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30, 0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x24, 0x40, 0x1f, 0x54, 0x7e, 0xa4, 0x45, 0xbb, 0x02, 0x22, 0x00, 0x0e, 0x30]));
        instance.dataReceived(Buffer.from([0x00, 0xe2, 0x00, 0x00, 0x16, 0x60, 0x16, 0x01, 0x55, 0x18, 0x30, 0x58, 0xe0, 0x7e, 0x2b, 0x01]));
        sinon.assert.called(spy);
    });
});